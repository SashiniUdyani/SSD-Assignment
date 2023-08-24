import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";

@Component({
  selector: 'app-vehicle-accident-view',
  templateUrl: './vehicle-accident-view.component.html',
  styleUrls: ['./vehicle-accident-view.component.css']
})
export class VehicleAccidentViewComponent implements OnInit {

  vehicleAccidentDetails = [];
  vehicleAccident = {
    vehicleAccidentID: '',
    vehicleID: '',
    driverID: '',
    accidentDate: '',
    accidentTime: '',
    insuranceNo: '',
    insuranceStatus: false,
  };

  accidentIdSearch;

  constructor(private vehicleAccidentService: VehicleAccidentService, private router: Router) {
  }

  ngOnInit(): void {
    this.getVehicleAccidents();
  }

  getVehicleAccidents() {
    this.vehicleAccidentService.getVehicleAccidents().subscribe((vehicleAccidentDetails) => {
      this.vehicleAccidentDetails = vehicleAccidentDetails;
    })
  }

  goToUpdate(accident) {
    this.vehicleAccidentService.accident = accident;
    this.router.navigate(['/main/update_accident_details'])
  }

  removeAccident(vehicleAccidentID, tblIndex) {
    this.vehicleAccidentService.deleteAccident(vehicleAccidentID).subscribe((reply) => {
      if (reply) {
        this.vehicleAccidentDetails.splice(tblIndex, 1);

      }
    })
  }

  getAccidentById() {
    this.vehicleAccidentService.getAccidentById(this.accidentIdSearch).subscribe((vehicleAccidentDetails) => {
      this.vehicleAccidentDetails = vehicleAccidentDetails;
    })
  }
}
