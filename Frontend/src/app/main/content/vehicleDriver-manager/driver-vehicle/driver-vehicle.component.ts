import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {DatePipe} from "@angular/common";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";

@Component({
  selector: 'app-driver-vehicle',
  templateUrl: './driver-vehicle.component.html',
  styleUrls: ['./driver-vehicle.component.css']
})
export class DriverVehicleComponent implements OnInit {

  @ViewChild('driverVehicleForm', {static: true}) public driverVehicleForm: NgForm;
  driverVehicle = {
    driver: {
      driverID: ''
    },
    vehicle: {
      vehicleId: ''
    }
  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  btnText = 'Add';

  driverVehicles = [];

  selectedDriverVehicle = {
    driver: {
      driverID: ''
    },
    vehicle: {
      vehicleId: ''
    }
  }

  tblIndex;

  constructor(
    private notifierService: NotifierService,
    private alertService: AlertBoxService,
    private datePipe: DatePipe,
    private vehicleDriverManagerService: VehicleDriverManagerService
  ) {
  }

  ngOnInit(): void {
    this.getDriverVehicles();
  }

  addDriverVehicle() {
    this.alertBox.alert = true;
    this.alertService.reply.observers = [];
    if (this.btnText === 'Add') {
      this.alertBox.msg = 'Do you want to add this  driver vehicle?';
      this.alertService.reply.subscribe(reply => {
        if (reply) {
          this.vehicleDriverManagerService.addDriverVehicle(this.driverVehicle).subscribe((driverVehicle) => {
            this.driverVehicles.push(driverVehicle);
            this.notifierService.notify("success", "Driver Vehicle added successfully");
            this.newDriverVehicle();
          })
        }
        this.alertBox.alert = false;
      })
    } else if (this.btnText === 'Update') {
      this.alertBox.msg = 'Do you want to update this  driver vehicle?';
      this.alertService.reply.subscribe(reply => {
        if (reply) {
          this.vehicleDriverManagerService.addDriverVehicle(this.driverVehicle).subscribe((driverVehicle) => {
            this.driverVehicles[this.tblIndex] = driverVehicle;
            this.notifierService.notify("success", "Driver Vehicle updated successfully");
            this.newDriverVehicle();
          }, (err) => {
            this.notifierService.notify("error", "Driver Vehicle update failed");
          })
        }
        this.alertBox.alert = false;
      })
    }
  }

  updateDriverVehicle(driverVehicle, i) {
    this.driverVehicle.vehicle.vehicleId = driverVehicle.vehicle.vehicleId;
    this.driverVehicle.driver.driverID = driverVehicle.driver.driverID;
    this.tblIndex = i;
    this.btnText = 'Update'
  }

  newDriverVehicle() {
    this.btnText = 'Add';
    this.driverVehicleForm.resetForm();
    // this.driverVehicle = this.getNewDriverVehicle();
  }

  removeDriverVehicle(driverVehicle, i) {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to remove this driver vehicle?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.vehicleDriverManagerService.deleteDriverVehicle(driverVehicle).subscribe((repl) => {
          if (repl) {
            this.driverVehicles.splice(i, 1);
            this.notifierService.notify("success", "Driver Vehicle deleted successfully");
          }
        }, (err) => {
          this.notifierService.notify("error", "Cannot delete Driver Vehicle");
        })
      }
      this.alertBox.alert = false;
    })
  }

  getDriverVehicles() {
    this.vehicleDriverManagerService.getDriverVehicles().subscribe((driverVehicles) => {
      this.driverVehicles = driverVehicles;
      console.log(driverVehicles)
    })
  }

  getNewDriverVehicle() {
    return {
      driver: {
        driverID: ''
      },
      vehicle: {
        vehicleId: ''
      }
    }
  }
}
