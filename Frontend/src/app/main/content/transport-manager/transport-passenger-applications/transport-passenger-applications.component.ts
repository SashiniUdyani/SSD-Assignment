import {Component, OnInit} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-transport-passenger-applications',
  templateUrl: './transport-passenger-applications.component.html',
  styleUrls: ['./transport-passenger-applications.component.css']
})
export class TransportPassengerApplicationsComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  applicationsP;
  applications;
  passengerDetails = [];
  oldAppId;
  newAppId;
  passengerId;

  constructor(private transportManagerService: TransportManagerService, private router: Router, private alertService: AlertBoxService) {

  }

  ngOnInit(): void {
    this.getApprovedApplications();
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getApprovedApplications() {
    this.transportManagerService.getApprovedApplications("P").subscribe((applications) => {
      this.applications = applications;
      console.log(applications);
    })
  }

  getApprovedApplicationsByDestination(destination) {
    this.transportManagerService.getApprovedApplicationsByDestination(destination, "P").subscribe((applications) => {
      this.applications = applications;
      console.log(applications);
    })
  }

  getApprovedApplicationsByPassenger(passengerId) {
    this.passengerId = passengerId;
    this.transportManagerService.getApprovedApplicationsByPassenger(passengerId).subscribe((applications) => {
      this.applicationsP = applications;
      console.log(applications);
    })
  }

  viewPassengers(application) {
    this.newAppId = application;
    this.isModalTable.openTable = true;
    if (application.passengerApplication !== null) {
      this.passengerDetails = application.passengerApplication.passengerPassengerApplications;
    } else {
      this.passengerDetails = [];
    }
  }

  changePassengerApplication() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to proceed the transfer?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.transportManagerService.changePassengerApplication(this.oldAppId.passengerApplication.passengerApplicationID, this.newAppId.passengerApplication.passengerApplicationID, this.passengerId).subscribe((rep) => {
          this.passengerDetails.push(rep)
          this.getApprovedApplications()
        })
      }
      this.alertBox.alert = false;
    })
  }
}
