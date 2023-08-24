import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-vehicle-pool',
  templateUrl: './vehicle-pool.component.html',
  styleUrls: ['./vehicle-pool.component.css']
})
export class VehiclePoolComponent implements OnInit {

  vehicles = [];
  vehicle = {
    vehicleId: '',
    vehicleType: '',
    model: '',
    noOfSeats: '',
    initialMeter: '',
    serviceMeter: '',
    fuelBalance: '',
    fuelConsumption: '',
    occupied: true,
    fuelType: ''
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  vehicleNumber;

  constructor(private securityOfficerService: SecurityOfficerService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  updateVehicleStatus(vehicle) {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update this vehicle availability?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    vehicle.occupied = !vehicle.occupied;
    this.securityOfficerService.updateVehicleAvailability(vehicle).subscribe((vehicleObj) => {
      vehicle.occupied = vehicleObj.occupied;
      this.notifierService.notify("success", "Vehicle availability updated successfully");
    }, (err) => {
      this.notifierService.notify("error", "Vehicle availability cannot be updated!!");
    })
      }
      this.alertBox.alert = false;
    })
  }


  getAllVehicles() {
    this.securityOfficerService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    })
  }

  getVehicleByNumber() {
    this.securityOfficerService.getVehicleByNumber(this.vehicleNumber).subscribe((vehicles) => {
      this.vehicles = vehicles;
    })
  }

}

