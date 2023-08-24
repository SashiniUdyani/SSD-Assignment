import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-item-delivery',
  templateUrl: './update-item-delivery.component.html',
  styleUrls: ['./update-item-delivery.component.css']
})
export class UpdateItemDeliveryComponent implements OnInit {

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
    deliveryItemDetails: [],
    status: 0
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
    this.item = this.getNewItem();
  }

  ngOnInit(): void {
    this.deliveryDetail = this.transportManagerService.deliveryItem;
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update this delivery?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTimeActual
        this.transportManagerService.updateDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
          let deliveryItemDetails = this.deliveryDetail.deliveryItemDetails
          this.deliveryDetail = deliveryDetail;
          this.deliveryDetail.deliveryItemDetails = deliveryItemDetails;
          this.notifierService.notify("success", "Delivery updated successfully");
          // this.router.navigate(['/main/view_item_delivery'])
        }, (err) => {
          this.notifierService.notify("error", "Delivery failed");
        })
      }
      this.alertBox.alert = false;
    })
  }

  onSubmitItem() {
    this.item.delivery.deliveryId = this.deliveryDetail.deliveryId;
    let count = 0;
    for (let i = this.deliveryDetail.deliveryItemDetails.length - 1; i >= 0; i--) {
      if (this.btnText === 'Update' && i === this.tblIndex) {
        continue;
      }
      let item = this.deliveryDetail.deliveryItemDetails[i];
      if (
        (item.itemName !== '' && item.itemName === this.item.itemName)
      ) {
        count++;
      }
      if (item.itemName === this.item.itemName) {
        this.notifierService.notify("error", "Duplicate Item Name found");
        break;
      }
    }
    if (this.btnText === 'Add' && count === 0) {
      this.alertBox.alert = true;
      this.alertBox.msg = 'Do you want to add this item?';
      this.alertService.reply.observers = [];
      this.alertService.reply.subscribe(reply => {
        if (reply) {
          this.transportManagerService.addItemToDelivery(this.item).subscribe((item) => {
            this.deliveryDetail.deliveryItemDetails.push(item);
            this.notifierService.notify("success", "Item added successfully");
            this.setNewItem();
          })
        }
        this.alertBox.alert = false;
      })
    } else if (this.btnText === 'Update' && count === 0) {
      this.alertBox.alert = true;
      this.alertBox.msg = 'Do you want to update this item?';
      this.alertService.reply.observers = [];
      this.alertService.reply.subscribe(reply => {
        if (reply) {
          this.transportManagerService.updateItemOnDelivery(this.item).subscribe((item) => {
            this.deliveryDetail.deliveryItemDetails[this.tblIndex] = item
            this.notifierService.notify("success", "Item updated successfully");
            this.setNewItem();
          })
        }
        this.alertBox.alert = false;
      })
    }

    // this.item.delivery.deliveryId = this.deliveryDetail.deliveryId;
    // // console.log(this.item)
    // if (this.btnText === 'Add') {
    //   this.transportManagerService.addItemToDelivery(this.item).subscribe((item) => {
    //     this.deliveryDetail.deliveryItemDetails.push(item);
    //   })
    // } else if (this.btnText === 'Update') {
    //   // console.log(this.item)
    //   this.transportManagerService.updateItemOnDelivery(this.item).subscribe((item) => {
    //     this.deliveryDetail.deliveryItemDetails[this.tblIndex] = item
    //   })
    // }
    // this.setNewItem();
  }

  removeItem(itemDetailId, i) {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to remove this item?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.transportManagerService.deleteItemOnDelivery(itemDetailId).subscribe((reply) => {
          if (reply) {
            this.deliveryDetail.deliveryItemDetails.splice(i, 1)
            this.notifierService.notify("success", "Item deleted successfully");
          }
        })
      }
      this.alertBox.alert = false;
    })
  }

  removeDelivery() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to remove this delivery?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.transportManagerService.deleteDelivery(this.deliveryDetail.deliveryId).subscribe((reply) => {
          if (reply) {
            this.router.navigate(['/main/view_item_delivery'])
          }
        })
      }
      this.alertBox.alert = false;
    })
  }

  setItem(item, i) {
    this.tblIndex = i;
    this.item.itemDetailId = item.itemDetailId;
    this.item.itemName = item.itemName;
    this.item.itemType = item.itemType;
    this.item.itemQty = item.itemQty;
    this.btnText = 'Update';
  }

  setNewItem() {
    this.item = this.getNewItem();
    this.itemForm.resetForm(this.item);
    this.btnText = 'Add';
  }

  getNewItem() {
    return {
      itemDetailId: '',
      itemName: '',
      itemType: '',
      itemQty: 1,
      delivery: {
        deliveryId: ''
      }
    };
  }

  getMinDate() {
    return this.transportManagerService.getCurDate();
  }
}
