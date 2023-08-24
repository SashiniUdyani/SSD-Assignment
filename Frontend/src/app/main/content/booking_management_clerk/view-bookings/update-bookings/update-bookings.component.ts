import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../../_service/common.service";

@Component({
  selector: 'app-update-bookings',
  templateUrl: './update-bookings.component.html',
  styleUrls: ['./update-bookings.component.css']
})
export class UpdateBookingsComponent implements OnInit {

  bookingApplication = {
    bookingManagementClerk: {
      bookingManagementClerkId: ''
    },
    booking: {
      bookingId: '',
      bookingDate: '',
      bookingTime: '',
      bookingTimeActual: '',
      bookingDateTime: '',
      destination: '',
      bookingStatus: '',
    },


  };

  selected = ""

  update(e) {
    this.selected = e.target.value
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.bookingApplication.booking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.bookingApplication = this.bookingManagerService.bookingApplication;

  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update Application booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.bookingApplication.booking.bookingDateTime = this.bookingApplication.booking.bookingDate + 'T' + this.bookingApplication.booking.bookingTimeActual

        this.bookingApplication.bookingManagementClerk = {
          bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
        };
        console.log(this.bookingApplication);
        this.bookingManagerService.updateBookingApplication(this.bookingApplication).subscribe(() => {
          this.notifierService.notify("success", "Application Booking updated successfully");

          this.router.navigate(['/main/view_booking_application'])
        })
      }
      this.alertBox.alert = false;
    })
  }


  // removeBookingApplication() {
  //   this.alertBox.alert = true;
  //   this.alertBox.msg = 'Do you want to delete this Application booking?';
  //   this.alertService.reply.observers = [];
  //   this.alertService.reply.subscribe(reply => {
  //     if (reply) {
  //       this.bookingManagerService.deleteBookingApplication(this.bookingApplication.booking.bookingId).subscribe(() => {
  //         if (reply) {
  //           this.notifierService.notify("success", "Application Booking deleted successfully");
  //           this.router.navigate(['/main/view_booking_application'])
  //         }
  //       })
  //     }
  //     this.alertBox.alert = false;
  //   })
  // }

  getMinDate() {
    return this.bookingManagerService.getCurDate() + 'T00:00';
  }

  getMinimumDate() {
    return this.bookingManagerService.getCurDate();
  }

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);
  }


}
