import {Component, OnInit, ViewChild} from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {NgForm} from "@angular/forms";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-program-booking',
  templateUrl: './program-booking.component.html',
  styleUrls: ['./program-booking.component.css']
})
export class ProgramBookingComponent implements OnInit {

  @ViewChild('programBookingForm', {static: true}) public programBookingForm: NgForm;

  tvPrograms = [];

  programBooking = {
    booking: {
      bookingId: '1',
      bookingDateTime: '',
      destination: '',
      bookingStatus: true,
      bookingManagementClerk: {
        bookingManagementClerkId: 'BMC123'
      },
      shift: {
        shiftId: '',
      }
    },

    tvProgram: {
      programID: '',
    }
  };

  programID;
  selected = ""
  shift;

  update(e) {
    this.selected = e.target.value
  }

  selectTvProgram(tvProgram) {
    this.programBooking.tvProgram.programID = tvProgram.programID;
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.shift = this.bookingManagerService.shift;
    this.getAllTvPrograms();
  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  setNewForm() {
    this.programBookingForm.resetForm();
  }

  getAllTvPrograms() {
    this.bookingManagerService.getAllTvPrograms().subscribe((tvProgram) => {
      this.tvPrograms = tvProgram;
      // console.log(this.tvPrograms);
    })
  }


  getTvProgram() {
    this.bookingManagerService.getTvProgram(this.programID).subscribe((tvPrograms) => {
      this.tvPrograms = tvPrograms;
      console.log(this.tvPrograms)
    })
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this TV program booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.programBooking.booking.shift.shiftId = this.shift.shiftId;
        this.programBooking.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];

        this.bookingManagerService.addProgramBooking(this.programBooking).subscribe(() => {
          this.setNewForm();
          this.notifierService.notify("success", "Tv program Booking added successfully");


          // this.router.navigate(['/main/view_vip_booking'])
        }, (err) => {
          this.notifierService.notify("error", "Tv program booking failed");
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
