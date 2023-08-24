import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../../_service/common.service";

@Component({
  selector: 'app-update-special-booking',
  templateUrl: './update-special-booking.component.html',
  styleUrls: ['./update-special-booking.component.css']
})
export class UpdateSpecialBookingComponent implements OnInit {


  specialBooking = {
    approvedFuelAmount: '',
    description: '',
    noOfPassengers: '',
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
    this.specialBooking.booking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.specialBooking = this.bookingManagerService.specialBooking;

  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update special booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.specialBooking.booking.bookingDateTime = this.specialBooking.booking.bookingDate + 'T' + this.specialBooking.booking.bookingTimeActual

        this.specialBooking.bookingManagementClerk = {
          bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
        };
        console.log(this.specialBooking);
        this.bookingManagerService.updateSpecialBooking(this.specialBooking).subscribe(() => {
          this.notifierService.notify("success", "Special Booking updated successfully");
          this.router.navigate(['/main/view_special_booking'])
        })
      }
      this.alertBox.alert = false;
    })

  }


  removeSpecialBooking() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to delete this special booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.bookingManagerService.deleteSpecialBooking(this.specialBooking.booking.bookingId).subscribe(() => {
          if (reply) {
            this.notifierService.notify("success", "Special Booking deleted successfully");
            this.router.navigate(['/main/view_special_booking'])
          }
        })
      }
      this.alertBox.alert = false;
    })
  }

  getMinDate() {
    return this.bookingManagerService.getCurDate();
  }

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);
  }


}
