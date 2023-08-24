import {Component, OnInit} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-passenger-delivery',
  templateUrl: './view-passenger-delivery.component.html',
  styleUrls: ['./view-passenger-delivery.component.css']
})
export class ViewPassengerDeliveryComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundPassenger: ''
  };

  deliveryPassengerDetails = [];
  deliveryPassenger = {
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    vehicleNumber: '',
    emailAddress: '',
    deliveryStatus: false,
    deliveryPassengerDetails: []
  };

  deliveryDate;
  companyName;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.transportManagerService.reportDate === undefined) {
      this.deliveryDate = this.transportManagerService.getCurDate();
    } else {
      this.deliveryDate = this.transportManagerService.reportDate;
    }
    this.getAllDeliveriesByDate();
  }

  setPassenger(deliveryPassenger) {
    this.deliveryPassenger = deliveryPassenger;
    this.isTrueOrFalse(true);
  }

  goToUpdate(deliveryPassenger) {
    this.transportManagerService.deliveryPassenger = deliveryPassenger;
    this.router.navigate(['/main/update_passenger_delivery'])
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllPassengerDeliveries() {
    this.transportManagerService.getAllDeliveries('Passenger').subscribe((deliveryPassengerDetails) => {
      this.deliveryPassengerDetails = deliveryPassengerDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByDate() {
    this.transportManagerService.getAllDeliveriesByDate('Passenger', this.deliveryDate).subscribe((deliveryPassengerDetails) => {
      this.deliveryPassengerDetails = deliveryPassengerDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByCompany() {
    this.transportManagerService.getAllDeliveriesByCompany('Passenger', this.companyName).subscribe((deliveryPassengerDetails) => {
      this.deliveryPassengerDetails = deliveryPassengerDetails;
      // console.log(this.deliveryItemDetails)
    })
  }
}
