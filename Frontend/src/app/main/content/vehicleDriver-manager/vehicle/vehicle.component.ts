import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @ViewChild('vehicleForm', {static: true}) public vehicleForm: NgForm;
  vehicleDetail = {
    vehicleId: '',
    vehicleType: '',
    model: '',
    noOfSeats: 0,
    initialMeter: 0,
    serviceMeter: 0,
    fuelBalance: 0,
    fuelConsumption: 0,
    occupied: '',
    fuelType: ''
  };
  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  vehicle: any;


  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router,private notifierService: NotifierService,
              private alertService: AlertBoxService,private commonService: CommonService) {
    this.vehicle = this.getNewVehicle();
  }

  ngOnInit(): void {
  }

  OnSubmitVehicle() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this vehicle?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    // console.log(this.vehicleDetail)
    this.vehicleDriverManagerService.addVehicle(this.vehicleDetail).subscribe((vehicle) => {
      this.setNewForm();
      this.notifierService.notify("success", "Vehicle Detail added successfully");
      // this.router.navigate(['/main/view_vehicles'])
    }, (err) => {
      this.notifierService.notify("error", "Vehicle failed");
    })
      }
      this.alertBox.alert = false;

    })
  }
  setNewForm() {
    this.vehicleForm.resetForm();
  }

  getNewVehicle() {
    return {
      vehicleId: '',
      vehicleType: '',
      model: '',
      noOfSeats: 0,
      initialMeter: 0,
      serviceMeter: 0,
      fuelBalance: 0,
      fuelType: '',
      fuelConsumption: 0,
      occupied: ''
    };
  }

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);

  }
}
