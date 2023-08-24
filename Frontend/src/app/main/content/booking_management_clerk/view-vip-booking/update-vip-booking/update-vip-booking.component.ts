import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../../_service/common.service";

@Component({
  selector: 'app-update-vip-booking',
  templateUrl: './update-vip-booking.component.html',
  styleUrls: ['./update-vip-booking.component.css']
})
export class UpdateVipBookingComponent implements OnInit {

  vipBooking = {
    approvedFuelAmount: '',
    purpose: '',
    timePeriod: '',
    approval: '',
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
    this.vipBooking.booking.bookingDateTime = this.bookingManagerService.getCurDate();
    this.vipBooking = this.bookingManagerService.vipBooking;

  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update VIP booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.vipBooking.booking.bookingDateTime = this.vipBooking.booking.bookingDate + 'T' + this.vipBooking.booking.bookingTimeActual

        this.vipBooking.bookingManagementClerk = {
          bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
        };
        console.log(this.vipBooking);
        this.bookingManagerService.updateVipBooking(this.vipBooking).subscribe(() => {
          this.notifierService.notify("success", "VIP Booking updated successfully");

          this.router.navigate(['/main/view_vip_booking'])
        })
      }
      this.alertBox.alert = false;
    })
  }


  removeVipBooking() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to delete this VIP booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.bookingManagerService.deleteVipBooking(this.vipBooking.booking.bookingId).subscribe(() => {
          if (reply) {
            this.notifierService.notify("success", "VIP Booking deleted successfully");
            this.router.navigate(['/main/view_vip_booking'])
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


