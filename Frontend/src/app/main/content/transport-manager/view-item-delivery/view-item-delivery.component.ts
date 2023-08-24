import {Component, OnInit} from '@angular/core';
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {getAllLifecycleHooks} from "@angular/compiler/src/lifecycle_reflector";

@Component({
  selector: 'app-view-item-delivery',
  templateUrl: './view-item-delivery.component.html',
  styleUrls: ['./view-item-delivery.component.css']
})
export class ViewItemDeliveryComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  deliveryItemDetails = [];
  deliveryItem = {
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    deliveryStatus: false,
    vehicleNumber: '',
    emailAddress: '',
    deliveryItemDetails: []
  };

  deliveryDate;
  companyName;

  constructor(private transportManagerService: TransportManagerService, private router: Router) {
  }

  ngOnInit(): void {
    // console.log(this.transportManagerService.reportDate)
    if (this.transportManagerService.reportDate === undefined) {
      this.deliveryDate = this.transportManagerService.getCurDate();
    } else {
      this.deliveryDate = this.transportManagerService.reportDate;
    }
    // console.log(this.deliveryDate)
    this.getAllDeliveriesByDate();
  }

  setItem(deliveryItem) {
    this.deliveryItem = deliveryItem;
    this.isTrueOrFalse(true);
  }

  goToUpdate(deliveryItem) {
    this.transportManagerService.deliveryItem = deliveryItem;
    this.router.navigate(['/main/update_item_delivery'])
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllItemDeliveries() {
    this.transportManagerService.getAllDeliveries('Item').subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByDate() {
    this.transportManagerService.getAllDeliveriesByDate('Item', this.deliveryDate).subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

  getAllDeliveriesByCompany() {
    this.transportManagerService.getAllDeliveriesByCompany('Item', this.companyName).subscribe((deliveryItemDetails) => {
      this.deliveryItemDetails = deliveryItemDetails;
      // console.log(this.deliveryItemDetails)
    })
  }

}
