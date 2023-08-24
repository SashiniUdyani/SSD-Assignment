import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleMaintenanceService} from "../../../../_service/vehicle-maintenance.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-maintenance-details',
  templateUrl: './update-maintenance-details.component.html',
  styleUrls: ['./update-maintenance-details.component.css']
})
export class UpdateMaintenanceDetailsComponent implements OnInit {

  @ViewChild('maintenanceDetailsForm', {static: true}) public maintenanceDetailsForm: NgForm;
  maintenanceDetail = {
    vehicle: {
      vehicleId: '',
    },
    vehicleMaintenanceID: '1',
    maintenanceDate: '',
    maintenanceType: '',
    maintenanceStatus: '',
  };

  constructor(private vehicleMaintenanceService: VehicleMaintenanceService, private router: Router) {
  }

  ngOnInit(): void {
    this.maintenanceDetail = this.vehicleMaintenanceService.maintenance;
    console.log(this.maintenanceDetail)
  }

  addMaintenance() {
    this.vehicleMaintenanceService.updateVehicleMaintenance(this.maintenanceDetail).subscribe((maintenance) => {
      this.router.navigate(['/main/view_maintenance'])
    })
  }

}
