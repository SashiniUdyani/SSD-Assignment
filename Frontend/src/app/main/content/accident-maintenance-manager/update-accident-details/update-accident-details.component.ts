import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-accident-details',
  templateUrl: './update-accident-details.component.html',
  styleUrls: ['./update-accident-details.component.css']
})
export class UpdateAccidentDetailsComponent implements OnInit {

  @ViewChild('accidentDetailsForm', {static: true}) public accidentDetailsForm: NgForm;
  accidentDetail = {
    vehicle: {
      vehicleId: '',
    },
    driver: {
      driverID: '',
    },
    vehicleAccidentID: '1',
    accidentDate: '',
    accidentTime: '',
    accidentTimeActual: '',
    insuranceNo: '',
    insuranceStatus: '',
  };

  constructor(private vehicleAccidentService: VehicleAccidentService, private router: Router) {
  }

  ngOnInit(): void {
    this.accidentDetail = this.vehicleAccidentService.accident;
  }

  //update
  addAccident() {
    console.log(this.accidentDetail);
    this.accidentDetail.accidentTime = this.accidentDetail.accidentTimeActual;
    this.vehicleAccidentService.updateVehicleAccident(this.accidentDetail).subscribe((accident) => {
      this.router.navigate(['/main/vehicle_accident_view'])
    })
  }

}
