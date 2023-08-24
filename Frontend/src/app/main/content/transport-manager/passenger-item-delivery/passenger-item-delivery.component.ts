import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-passenger-item-delivery',
  templateUrl: './passenger-item-delivery.component.html',
  styleUrls: ['./passenger-item-delivery.component.css']
})
export class PassengerItemDeliveryComponent implements OnInit {

  @ViewChild('deliveryForm', {static: true}) public deliveryForm: NgForm;
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
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
    deliveryItemDetails: [],
    deliveryPassengerDetails: []
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  item;
  btnTextItem = 'Add';
  tblIndexItem;

  passenger;
  btnTextPassenger = 'Add';
  tblIndexPassenger;

  constructor(
    private transportManagerService: TransportManagerService,
    private router: Router,
    private notifierService: NotifierService,
    private alertService: AlertBoxService,
    private commonService: CommonService
  ) {
    this.item = this.getNewItem();
    this.passenger = this.getNewPassenger();
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
        this.transportManagerService.addPassengerItemDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
          this.setNewForm();
          this.notifierService.notify("success", "Delivery added successfully");
          // this.router.navigate(['/main/view_item_passenger_delivery'])
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
        if (this.btnTextItem === 'Update' && i === this.tblIndexItem) {
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
      if (this.btnTextItem === 'Add' && count === 0) {
        this.deliveryDetail.deliveryItemDetails.push(this.item);
        this.notifierService.notify("success", "Item added successfully");
        this.setNewItem();
      } else if (this.btnTextItem === 'Update' && count === 0) {
        this.deliveryDetail.deliveryItemDetails[this.tblIndexItem] = this.item
        this.notifierService.notify("success", "Item updated successfully");
        this.setNewItem();
      }
    }
  }

  onSubmitPassenger() {
    if (this.deliveryDetail.deliveryPassengerDetails.length === 0) {
      this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
      this.notifierService.notify("success", "Passenger added successfully");
      this.setNewPassenger();
    } else {
      let count = 0;
      for (let i = this.deliveryDetail.deliveryPassengerDetails.length - 1; i >= 0; i--) {
        if (this.btnTextPassenger === 'Update' && i === this.tblIndexPassenger) {
          continue;
        }
        let passenger = this.deliveryDetail.deliveryPassengerDetails[i];
        if (
          (passenger.passengerNic !== '' && passenger.passengerNic === this.passenger.passengerNic) ||
          (passenger.contactNumber !== '' && passenger.contactNumber === this.passenger.contactNumber)
        ) {
          count++;
        }
        if (passenger.passengerNic === this.passenger.passengerNic && passenger.contactNumber === this.passenger.contactNumber) {
          this.notifierService.notify("error", "Duplicate NIC and Contact No found");
          break;
        } else if (passenger.contactNumber === this.passenger.contactNumber) {
          this.notifierService.notify("error", "Duplicate Contact No found");
          break;
        } else if (passenger.passengerNic === this.passenger.passengerNic) {
          this.notifierService.notify("error", "Duplicate NIC found");
          break;
        }
      }
      if (this.btnTextPassenger === 'Add' && count === 0) {
        this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
        this.notifierService.notify("success", "Passenger added successfully");
        this.setNewPassenger();
      } else if (this.btnTextPassenger === 'Update' && count === 0) {
        this.deliveryDetail.deliveryPassengerDetails[this.tblIndexPassenger] = this.passenger
        this.notifierService.notify("success", "Passenger updated successfully");
        this.setNewPassenger();
      }
    }
  }

  setItem(item, i) {
    this.tblIndexItem = i;
    this.item.itemName = item.itemName;
    this.item.itemType = item.itemType;
    this.item.itemQty = item.itemQty;
    this.btnTextItem = 'Update';
  }

  setPassenger(passenger, i) {
    this.tblIndexPassenger = i;
    this.passenger.passengerName = passenger.passengerName;
    this.passenger.passengerNic = passenger.passengerNic;
    this.passenger.contactNumber = passenger.contactNumber;
    this.passenger.passengerType = passenger.passengerType;
    this.btnTextPassenger = 'Update';
  }

  setNewItem() {
    this.item = this.getNewItem();
    this.itemForm.resetForm(this.item);
    this.btnTextItem = 'Add';
  }

  setNewPassenger() {
    this.passenger = this.getNewPassenger();
    this.passengerForm.resetForm();
    this.btnTextPassenger = 'Add';
  }

  setNewForm() {
    this.deliveryForm.resetForm();
    this.deliveryDetail.deliveryItemDetails = [];
    this.deliveryDetail.deliveryPassengerDetails = [];
  }

  getNewItem() {
    return {
      itemName: '',
      itemType: '',
      itemQty: 1
    };
  }

  getNewPassenger() {
    return {
      passengerName: '',
      passengerNic: '',
      contactNumber: '',
      passengerType: ''
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

  demoPassenger() {
    this.passenger.passengerName = 'Sirisena';
    this.passenger.passengerNic = '651452230V';
    this.passenger.contactNumber = '071-7654321';
    this.passenger.passengerType = 'Teacher'
  }

  demoItem() {
    this.item.itemName = 'Samsung246';
    this.item.itemType = 'Camera';
    this.item.itemQty = 3
  }
}
