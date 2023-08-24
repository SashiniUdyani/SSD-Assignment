import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-delivery-status',
  templateUrl: './update-delivery-status.component.html',
  styleUrls: ['./update-delivery-status.component.css']
})
export class UpdateDeliveryStatusComponent implements OnInit {

  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  deliveryDetail = {
    deliveryId: '',
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    vehicleNumber: '',
    emailAddress: '',
    address: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryTimeActual: '',
    deliveryDateTime: '',
    deliveryStatus: '',
    deliveryItemDetails: []
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  item;
  btnText = 'Add';
  tblIndex;

  constructor(
    private transportManagerService: TransportManagerService,
    private router: Router,
    private notifierService: NotifierService,
    private alertService: AlertBoxService
  ) {
  }

  ngOnInit(): void {
    this.deliveryDetail = this.transportManagerService.deliveryItem;
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update delivery status?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        //this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTimeActual
        this.transportManagerService.updateDeliveryStatus(this.deliveryDetail, JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((deliveryDetail) => {
          let deliveryItemDetails = this.deliveryDetail.deliveryItemDetails
          this.deliveryDetail = deliveryDetail;
          this.deliveryDetail.deliveryItemDetails = deliveryItemDetails;
          this.notifierService.notify("success", "Delivery updated successfully");
          this.router.navigate(['/main//view_delivery_status'])
        }, (err) => {
          this.notifierService.notify("error", "Delivery failed");
        })
      }
      this.alertBox.alert = false;
    })
  }

  getMinDate() {
    return this.transportManagerService.getCurDate();
  }

}
