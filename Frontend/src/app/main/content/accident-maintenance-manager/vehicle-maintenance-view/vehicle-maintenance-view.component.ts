import { Component, OnInit } from '@angular/core';
import {VehicleAccidentService} from "../../../../_service/vehicle-accident.service";
import {Router} from "@angular/router";
import {VehicleMaintenanceService} from "../../../../_service/vehicle-maintenance.service";

@Component({
  selector: 'app-vehicle-maintenance-view',
  templateUrl: './vehicle-maintenance-view.component.html',
  styleUrls: ['./vehicle-maintenance-view.component.css']
})
export class VehicleMaintenanceViewComponent implements OnInit {


  vehicleMaintenanceDetails = [];
  vehicleMaintenance = {
    maintenanceID: '',
    vehicleID: '',
    maintenanceDate: '',
    maintenanceType: '',
    companyName: '',
    maintenanceStatus: false,
  };

  maintenanceIdSearch;

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

  removeMaintenance(maintenanceID, tblIndex) {
    this.vehicleMaintenanceService.deleteVehicleMaintenance(maintenanceID).subscribe((reply) => {
      if (reply) {
        this.vehicleMaintenanceDetails.splice(tblIndex, 1);
      }
    })
  }

  getMaintenanceById() {
    this.vehicleMaintenanceService.getMaintenanceById(this.maintenanceIdSearch).subscribe((vehicleMaintenanceDetails) => {
      this.vehicleMaintenanceDetails = vehicleMaintenanceDetails;
    })
  }

}
