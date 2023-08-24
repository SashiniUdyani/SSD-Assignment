import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-shift',
  templateUrl: './update-shift.component.html',
  styleUrls: ['./update-shift.component.css']
})
export class UpdateShiftComponent implements OnInit {

  @ViewChild('shiftForm', {static: true}) public shiftForm: NgForm;
  driverVehicles = [];
  shift = {
    shiftId: '',
    shiftDate: '',
    startingTime: '',
    startingTimeActual: '',
    endingTime: '',
    endingTimeActual: '',
    driverVehicle: {
      driverVehicleID: {
        driverID: '',
        vehicleId: ''
      }
    },
    bookingManagementClerk: {
      bookingManagementClerkId: ''
    }
  };

  deliveryDate;
  driverId;

  // selectedDriver;

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }

  ngOnInit(): void {
    this.shift.shiftDate = this.bookingManagerService.getCurDate();
    this.shift = this.bookingManagerService.shift;
  }

  // setItem(deliveryItem) {
  //   this.deliveryItem = deliveryItem;
  // }

  selectDriver(driver) {
    // this.selectedDriver = driver;
    this.shift.driverVehicle.driverVehicleID.driverID = driver.driverVehicleID.driverID;
    this.shift.driverVehicle.driverVehicleID.vehicleId = driver.driverVehicleID.vehicleId;
  }

  getDriveVehicles() {
    this.bookingManagerService.getDriveVehicles(this.driverId).subscribe((driverVehicles) => {
      this.driverVehicles = driverVehicles;
      console.log(this.driverVehicles)
    })
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update shift?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.shift.startingTime = this.shift.startingTimeActual;
        this.shift.endingTime = this.shift.endingTimeActual;
        this.shift.bookingManagementClerk = {
          bookingManagementClerkId: JSON.parse(localStorage.getItem('user'))['employeeID']
        };
        this.bookingManagerService.updateShift(this.shift).subscribe(() => {
          this.notifierService.notify("success", "Shift updated successfully");
          this.router.navigate(['/main/view_shifts'])
        })
      }
      this.alertBox.alert = false;
    })

  }


  removeShift() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to delete this shift?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.bookingManagerService.deleteDriverShift(this.shift.shiftId).subscribe(() => {
          if (reply) {
            this.notifierService.notify("success", "Shift deleted successfully");
            this.router.navigate(['/main/view_shifts'])
          }
        })
      }
      this.alertBox.alert = false;
    })
  }

  getMinDate() {
    return this.bookingManagerService.getCurDate();
  }


}
