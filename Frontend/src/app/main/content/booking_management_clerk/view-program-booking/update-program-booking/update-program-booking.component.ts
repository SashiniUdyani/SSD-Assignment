import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../../_service/common.service";

@Component({
  selector: 'app-update-program-booking',
  templateUrl: './update-program-booking.component.html',
  styleUrls: ['./update-program-booking.component.css']
})
export class UpdateProgramBookingComponent implements OnInit {

  programBooking = {
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
    this.programBooking.booking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.programBooking = this.bookingManagerService.programBooking;

  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update Program booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.programBooking.booking.bookingDateTime = this.programBooking.booking.bookingDate + 'T' + this.programBooking.booking.bookingTimeActual

        this.programBooking.bookingManagementClerk = {
          bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
        };
        console.log(this.programBooking);
        this.bookingManagerService.updateProgramBooking(this.programBooking).subscribe(() => {
          this.notifierService.notify("success", "Program Booking updated successfully");

          this.router.navigate(['/main/view_program_booking'])
        })
      }
      this.alertBox.alert = false;
    })
  }


  removeProgramBooking() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to delete this Program booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.bookingManagerService.deleteProgramBooking(this.programBooking.booking.bookingId).subscribe(() => {
          if (reply) {
            this.notifierService.notify("success", "Program Booking deleted successfully");
            this.router.navigate(['/main/view_program_booking'])
          }
        })
      }
      this.alertBox.alert = false;
    })
  }

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
