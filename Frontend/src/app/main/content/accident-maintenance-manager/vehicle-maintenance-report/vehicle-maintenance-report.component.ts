import { Component, OnInit } from '@angular/core';
import {VehicleMaintenanceService} from "../../../../_service/vehicle-maintenance.service";
import {Router} from "@angular/router";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-vehicle-maintenance-report',
  templateUrl: './vehicle-maintenance-report.component.html',
  styleUrls: ['./vehicle-maintenance-report.component.css']
})
export class VehicleMaintenanceReportComponent implements OnInit {

  vehicleMaintenanceDetails = [];
  vehicleMaintenance = {
    maintenanceID: '',
    vehicleID: '',
    maintenanceDate: '',
    maintenanceType: '',
    companyName: '',
    maintenanceStatus: false,
  };

  constructor(private vehicleMaintenanceService: VehicleMaintenanceService, private router: Router) { }

  ngOnInit(): void {
    this.getVehicleMaintenance();
  }

  getVehicleMaintenance() {
    this.vehicleMaintenanceService.getVehicleMaintenance().subscribe((vehicleMaintenanceDetails) => {
      this.vehicleMaintenanceDetails = vehicleMaintenanceDetails;
    })
  }

  goToUpdate(maintenance) {
    this.vehicleMaintenanceService.maintenance = maintenance;
    this.router.navigate(['/main/update_maintenance_details'])
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
      pdf.addImage(contentDataURL, 'PNG', 1, 5, 0, 0);
      pdf.save('Filename.pdf');
    });
  }

}
