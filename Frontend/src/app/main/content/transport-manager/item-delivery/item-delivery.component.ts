import {Component, OnInit, ViewChild} from '@angular/core';
import {NavbarService} from "../../../../_service/navbar.service";
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-item-delivery',
  templateUrl: './item-delivery.component.html',
  styleUrls: ['./item-delivery.component.css']
})
export class ItemDeliveryComponent implements OnInit {

  @ViewChild('deliveryForm', {static: true}) public deliveryForm: NgForm;
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  deliveryDetail = {
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    vehicleNumber: '',
    emailAddress: '',
    address: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryDateTime: '',
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
    private alertService: AlertBoxService,
    private commonService: CommonService
  ) {
    this.item = this.getNewItem();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this delivery?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTime
        this.transportManagerService.addItemDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
          this.setNewForm();
          this.notifierService.notify("success", "Delivery added successfully");
          // this.router.navigate(['/main/view_item_delivery'])
        }, (err) => {
          this.notifierService.notify("error", "Delivery failed");
        })
      }
      this.alertBox.alert = false;
    })
  }

  onSubmitItem() {
    if (this.deliveryDetail.deliveryItemDetails.length === 0) {
      this.deliveryDetail.deliveryItemDetails.push(this.item);
      this.notifierService.notify("success", "Item added successfully");
      this.setNewItem();
    } else {
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
        this.deliveryDetail.deliveryItemDetails.push(this.item);
        this.notifierService.notify("success", "Item added successfully");
        this.setNewItem();
      } else if (this.btnText === 'Update' && count === 0) {
        this.deliveryDetail.deliveryItemDetails[this.tblIndex] = this.item
        this.notifierService.notify("success", "Item updated successfully");
        this.setNewItem();
      }
    }
  }

  setItem(item, i) {
    this.tblIndex = i;
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

  setNewForm() {
    this.deliveryForm.resetForm();
    this.deliveryDetail.deliveryItemDetails = [];
  }

  getNewItem() {
    return {
      itemName: '',
      itemType: '',
      itemQty: 1
    };
  }

  getMinDate() {
    return this.transportManagerService.getCurDate();
  }

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);
  }

  demoForm() {
    this.deliveryDetail.deliveryPersonName = 'Nimal Silva';
    this.deliveryDetail.deliveryPersonNic = '936451120V';
    this.deliveryDetail.contactNumber = '077-1234568';
    this.deliveryDetail.vehicleNumber = 'CAB 4563';
    this.deliveryDetail.emailAddress = 'nimal@gmail.com';
    this.deliveryDetail.address = '123, ABC Road, Colombo';
    this.deliveryDetail.companyName = 'DHL';
    this.deliveryDetail.deliveryDate = '2021-10-07';
    this.deliveryDetail.deliveryTime = '10:30';
    // this.deliveryDetail.deliveryDateTime = '';
  }

  demoItem() {
    this.item.itemName = 'Samsung246';
    this.item.itemType = 'Camera';
    this.item.itemQty = 3
  }
}
