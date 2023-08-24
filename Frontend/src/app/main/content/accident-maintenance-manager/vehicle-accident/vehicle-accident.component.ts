import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {NotifierService} from "angular-notifier";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-vehicle-accident',
  templateUrl: './vehicle-accident.component.html',
  styleUrls: ['./vehicle-accident.component.css']
})
export class VehicleAccidentComponent implements OnInit {

  @ViewChild('accidentDetailsForm', {static: true}) public accidentDetailsForm: NgForm;
  accidentDetail = {
    vehicleAccidentID: '1',
    driverVehicle: {
      driverVehicleID: {
        driverID: '',
        vehicleId: ''
      }
    },
    accidentDate: '',
    accidentTime: '',
    insuranceNo: '',
    insuranceStatus: '',
    accidentMaintenanceManager: {
      employeeID: ''
    }
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  driverIsPresent = 0;
  vehicleIsPresent = 0

  accident: any;

  constructor(private vehicleAccidentService: VehicleAccidentService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
  }

  addAccident() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add details?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {

        this.accidentDetail.accidentMaintenanceManager.employeeID = JSON.parse(localStorage.getItem('user'))['employeeID']
        this.vehicleAccidentService.addAccident(this.accidentDetail).subscribe((accident) => {
          this.router.navigate(['/main/vehicle_accident_view'])

          this.notifierService.notify("success", "Details added successfully");
        }, (err) => {
          this.notifierService.notify("error", "Failed to add");
        })
      }
      this.alertBox.alert = false;
    })
  }

  onSubmit() {
    return false;
  }

  getMinDate() {
    let curDate = new Date();
    curDate.setDate(curDate.getDate() - 2)
    return this.datePipe.transform(curDate, 'yyyy-MM-dd')
  }

  getMaxDate(){
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }
}
