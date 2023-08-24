import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  @ViewChild('shiftForm', {static: true}) public shiftForm: NgForm;

  driverVehicles = [];
  otDetails = [];

  shift = {
    shiftId: '',
    shiftDate: '',
    startingTime: '',
    endingTime: '',
    driverVehicle: {
      driverVehicleID: {
        driverID: '',
        vehicleId: ''
      },
      driver: {
        driverID: '',
      }
    },
    bookingManagementClerk: {
      bookingManagementClerkId: ''
    },
    overTime: {
      overTimeID: '',
    }
  };

  deliveryDate;
  driverId;
  selectedOt;
  // selectedDriver;

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };


  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }

  ngOnInit(): void {
    this.shift.shiftDate = this.bookingManagerService.getCurDate();
    this.getAllDriverVehicles();
    this.getOt();
  }


  getOt() {
    this.bookingManagerService.getOt().subscribe((otDetails) => {
      this.otDetails = otDetails;
      console.log(this.otDetails)
    })
  }

  selectOt(ot) {
    this.shift.overTime.overTimeID = ot.overTimeID;
  }

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

  getAllDriverVehicles() {
    this.bookingManagerService.getAllDriverVehicles().subscribe((driverVehicles) => {
      this.driverVehicles = driverVehicles;
      console.log(this.driverVehicles)
    })
  }


  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this shift?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.shift.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];
        this.bookingManagerService.addShift(this.shift).subscribe(() => {
          this.setNewForm();
          this.notifierService.notify("success", "Shift added successfully");

          // this.router.navigate(['/main/view_shifts'])
        }, (err) => {
          this.notifierService.notify("error", "Shift failed");
        })
      }
      this.alertBox.alert = false;
    })
  }


  getMinDate() {
    return this.bookingManagerService.getCurDate();
  }

  setNewForm() {
    this.shiftForm.resetForm();
  }

  setOt(ot) {
    this.selectedOt = ot;
    this.isTrueOrFalse(true);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }


  approveOt(approval) {
    this.bookingManagerService.approveOt(this.selectedOt.overTimeID, approval).subscribe((ot) => {
      this.selectedOt.approval = ot.approval;
    })
  }
}


