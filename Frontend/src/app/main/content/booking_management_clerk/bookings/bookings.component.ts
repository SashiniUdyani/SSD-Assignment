import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {


  @ViewChild('bookingApplicationForm', {static: true}) public bookingApplicationForm: NgForm;

  applications = [];

  bookingApplication = {
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

    application: {
      applicationID: '',
    }
  };

  applicationID;
  selected = ""
  shift;


  update(e) {
    this.selected = e.target.value
  }

  selectApplication(application) {
    this.bookingApplication.application.applicationID = application.applicationID;
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.shift = this.bookingManagerService.shift;
    this.getApplication();
  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  setNewForm() {
    this.bookingApplicationForm.resetForm();
  }


  getApplication() {
    this.bookingManagerService.getApplication().subscribe((applications) => {
      this.applications = applications;
      console.log(this.applications)
    })
  }

  getApplicationById() {
    this.bookingManagerService.getApplicationById(this.applicationID).subscribe((applicationDetails) => {
      this.applications = applicationDetails;
      // console.log(this.vehicles)
    })
  }


  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this Application booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.bookingApplication.booking.shift.shiftId = this.shift.shiftId;
        this.bookingApplication.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];

        this.bookingManagerService.addBookingApplication(this.bookingApplication).subscribe(() => {
          this.setNewForm();
          this.notifierService.notify("success", "Application Booking added successfully");


          // this.router.navigate(['/main/view_application_booking'])
        }, (err) => {
          this.notifierService.notify("error", "Application booking failed");
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
