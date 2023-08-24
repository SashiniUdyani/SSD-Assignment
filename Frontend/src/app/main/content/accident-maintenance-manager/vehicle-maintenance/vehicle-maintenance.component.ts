import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";
import {Router} from "@angular/router";
import {VehicleMaintenanceService} from "../../../../_service/vehicle-maintenance.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-vehicle-maintenance',
  templateUrl: './vehicle-maintenance.component.html',
  styleUrls: ['./vehicle-maintenance.component.css']
})
export class VehicleMaintenanceComponent implements OnInit {

  @ViewChild('maintenanceDetailsForm', {static: true}) public maintenanceDetailsForm: NgForm;
  maintenanceDetail = {
    vehicleMaintenanceID: '1',
    vehicle: {
      vehicleId: ''
    },
    maintenanceType: '',
    maintenanceDate: '',
    companyName: '',
    maintenanceStatus: '',
    accidentMaintenanceManager: {
      employeeID: ''
    }
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  vehicleIsPresent = 0;

  maintenance: any;

  constructor(private vehicleMaintenanceService: VehicleMaintenanceService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {

  }

  ngOnInit(): void {
  }

  addMaintenance() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add details?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {

        this.maintenanceDetail.accidentMaintenanceManager.employeeID = JSON.parse(localStorage.getItem('user'))['employeeID']
        this.vehicleMaintenanceService.addMaintenance(this.maintenanceDetail).subscribe((maintenance) => {
          this.router.navigate(['/main/view_maintenance'])

          this.notifierService.notify("success", "Details added successfully");
        }, (err) => {
          this.notifierService.notify("error", "Failed to add");
        })
      }
      this.alertBox.alert = false;
    })
  }

  getMinDate() {
    return this.commonService.getCurDate();
  }

}
