import {Component, OnInit} from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transport-requests',
  templateUrl: './transport-requests.component.html',
  styleUrls: ['./transport-requests.component.css']
})
export class TransportRequestsComponent implements OnInit {

  transportDetails = [];

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  // deliveryItemDetails = [];
  // deliveryItem = {
  //   deliveryItemDetails: []
  // };

  user: boolean = true;
  item: boolean = true;
  tblIndex;

  applicationID;
  selectedTransport;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  // ngOnInit(): void {
  // }


  ngOnInit(): void {
    this.getTransports();
  }

  // setItem(deliveryItem, i) {
  //   this.tblIndex = i;
  //   this.deliveryItem = deliveryItem;
  //   this.isTrueOrFalse(true);
  // }


  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getTransports() {
    this.generalManagerService.getTransportApplication().subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // if(this.deliveryItemDetails.applicationID)
      console.log(this.transportDetails)
    })
  }

  setTransport(transport) {
    this.selectedTransport = transport;
    this.isTrueOrFalse(true);
  }

  getTransportByID() {
    this.generalManagerService.getTransportByID(this.applicationID).subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // console.log(this.vehicles)
    })
  }

  //get all transports
  getAllTransportRequests() {
    this.generalManagerService.getTransportApplication().subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // console.log(this.vehicles)
    })
  }


  approveTransport(approval) {
    this.generalManagerService.approveTransport(this.selectedTransport.applicationID, approval).subscribe((transport) => {
      this.selectedTransport.approval = transport.approval;
    })
  }

  // goToUpdate(deliveryItem) {
  //   this.generalManagerService.deliveryItem = deliveryItem;
  //   this.router.navigate(['/main/update_available_transports'])
  // }
}
