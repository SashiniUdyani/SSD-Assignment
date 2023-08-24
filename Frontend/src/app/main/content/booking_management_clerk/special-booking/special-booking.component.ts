import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-special-booking',
  templateUrl: './special-booking.component.html',
  styleUrls: ['./special-booking.component.css']
})
export class SpecialBookingComponent implements OnInit {

  @ViewChild('specialBookingForm', {static: true}) public specialBookingForm: NgForm;

  specialBooking = {
    booking: {
      bookingId: '',
      bookingDateTime: '',
      destination: '',
      bookingStatus: true,
      bookingManagementClerk: {
        bookingManagementClerkId: ''
      },
      shift: {
        shiftId: ''
      }
    },
    description: '',
    noOfPassengers: '',
    approvedFuelAmount: ''
  };
  selected = ""
  shift;

  update(e) {
    this.selected = e.target.value
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.shift = this.bookingManagerService.shift;
  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  setNewForm() {
    this.specialBookingForm.resetForm();
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this special booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.specialBooking.booking.shift.shiftId = this.shift.shiftId;
        this.specialBooking.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
        console.log(this.specialBooking);
        this.bookingManagerService.addSpecialBooking(this.specialBooking).subscribe(() => {
          this.setNewForm();
          this.notifierService.notify("success", "Special Booking added successfully");

          this.router.navigate(['/main/view_special_booking'])
        }, (err) => {
          this.notifierService.notify("error", "Special booking failed");
        })
      }
      this.alertBox.alert = false;
    })
  }

  getMinDate() {
    return this.bookingManagerService.getCurDate() + 'T00:00';
  }

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);
  }

}

