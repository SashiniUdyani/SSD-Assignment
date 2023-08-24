import {Component, OnInit} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-passenger-item-delivery',
  templateUrl: './view-passenger-item-delivery.component.html',
  styleUrls: ['./view-passenger-item-delivery.component.css']
})
export class ViewPassengerItemDeliveryComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  deliveryPassengerItemDetails = [];
  deliveryPassengerItem = {
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    vehicleNumber: '',
    emailAddress: '',
    deliveryStatus: false,
    deliveryItemDetails: [],
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

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllDeliveriesByDate() {
    this.transportManagerService.getAllDeliveriesByDate('PassengerItem', this.deliveryDate).subscribe((deliveryPassengerItemDetails) => {
      this.deliveryPassengerItemDetails = deliveryPassengerItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByCompany() {
    this.transportManagerService.getAllDeliveriesByCompany('PassengerItem', this.companyName).subscribe((deliveryPassengerItemDetails) => {
      this.deliveryPassengerItemDetails = deliveryPassengerItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllPassengerItemDeliveries() {
    this.transportManagerService.getAllDeliveries('PassengerItem').subscribe((deliveryPassengerItemDetails) => {
      this.deliveryPassengerItemDetails = deliveryPassengerItemDetails;
      console.log(this.deliveryPassengerItemDetails)
    })
  }

  setPassengerItem(deliveryPassengerItem) {
    this.deliveryPassengerItem = deliveryPassengerItem;
    this.isTrueOrFalse(true);
  }

  goToUpdate(deliveryPassengerItem) {
    this.transportManagerService.deliveryPassengerItem = deliveryPassengerItem;
    this.router.navigate(['/main/update_passenger_item_delivery'])
  }
}
