import { Component, OnInit } from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transport-item-applications',
  templateUrl: './transport-item-applications.component.html',
  styleUrls: ['./transport-item-applications.component.css']
})
export class TransportItemApplicationsComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  applications;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {

  }

  ngOnInit(): void {
    this.getApprovedApplications();
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getApprovedApplications() {
    this.transportManagerService.getApprovedApplications("I").subscribe((applications) => {
      this.applications = applications;
      console.log(applications);
    })
  }

  getApprovedApplicationsByDestination(destination) {
    this.transportManagerService.getApprovedApplicationsByDestination(destination, "I").subscribe((applications) => {
      this.applications = applications;
      // console.log(applications);
    })
  }

  goToUpdate(deliveryItem) {
    // this.applicantService.deliveryItem = deliveryItem;
    // // console.log(this.applicantService.deliveryItem);
    // this.router.navigate(['/main/update_available_transports'])
  }

}
