import { Component, OnInit } from '@angular/core';
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";
import {Router} from "@angular/router";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-vehicle-accident-report',
  templateUrl: './vehicle-accident-report.component.html',
  styleUrls: ['./vehicle-accident-report.component.css']
})
export class VehicleAccidentReportComponent implements OnInit {

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

  sendToPdf(){
    let data = document.getElementById("pdf");
    // let data = document.getElementById("maindiv");
    // console.log(data);
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg', 2.0)
      console.log(contentDataURL);
      let pdf = new jsPDF('l', 'cm', 'a3'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 3, 5, 0, 0);
      pdf.save('Filename.pdf');
    });
  }
}
