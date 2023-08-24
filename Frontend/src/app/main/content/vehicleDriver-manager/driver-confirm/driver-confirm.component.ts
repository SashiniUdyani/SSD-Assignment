
import { Component, OnInit } from '@angular/core';
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-driver-confirm',
  templateUrl: './driver-confirm.component.html',
  styleUrls: ['./driver-confirm.component.css']
})
export class DriverConfirmComponent implements OnInit {

  driverDetails = [];

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };
  user: boolean = true;
  item: boolean = true;
  tblIndex;

  driverID;
  employeeID;
  selectedDriver;
  selectedUserAccount;

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) { }

  ngOnInit(): void {
    this.getDriverRequest();
  }
//get all driver requests
  getDriverRequest() {
    this.vehicleDriverManagerService.getDriverRequest().subscribe((driverDetails) => {
      this.driverDetails = driverDetails;
      // console.log(this.vehicles)
    })
  }

  approveDriver(approval) {
    this.vehicleDriverManagerService.approveDriver(this.selectedDriver.employeeID, approval).subscribe((driver) => {
      this.selectedDriver.approved = driver.approved;
    })

  }
  // approveUserAccount(approval) {
  //   this.vehicleDriverManagerService.approveUserAccount(this.selectedUserAccount.employeeID, approval).subscribe((userAccount) => {
  //     this.selectedUserAccount.approved = userAccount.approved;
  //   })
  // }



  getTransportByID() {

  }

  setDriver(driver) {
    this.selectedDriver = driver;
    this.isTrueOrFalse(true);

  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }
}
