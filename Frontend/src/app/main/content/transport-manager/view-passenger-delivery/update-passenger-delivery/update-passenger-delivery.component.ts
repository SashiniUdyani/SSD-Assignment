import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-passenger-delivery',
  templateUrl: './update-passenger-delivery.component.html',
  styleUrls: ['./update-passenger-delivery.component.css']
})
export class UpdatePassengerDeliveryComponent implements OnInit {

  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
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
    deliveryPassengerDetails: [],
    status: 0
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  passenger;
  btnText = 'Add';
  tblIndex;

  constructor(
    private transportManagerService: TransportManagerService,
    private router: Router,
    private notifierService: NotifierService,
    private alertService: AlertBoxService
  ) {
    this.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {
    this.deliveryDetail = this.transportManagerService.deliveryPassenger;
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update this delivery?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTimeActual
        this.transportManagerService.updateDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
          let deliveryPassengerDetails = this.deliveryDetail.deliveryPassengerDetails
          this.deliveryDetail = deliveryDetail;
          this.deliveryDetail.deliveryPassengerDetails = deliveryPassengerDetails;
          this.notifierService.notify("success", "Delivery updated successfully");
        }, (err) => {
          this.notifierService.notify("error", "Delivery failed");
        })
      }
      this.alertBox.alert = false;
    })
  }

  onSubmitPassenger() {
    this.passenger.delivery.deliveryId = this.deliveryDetail.deliveryId;
    let count = 0;
    for (let i = this.deliveryDetail.deliveryPassengerDetails.length - 1; i >= 0; i--) {
      if (this.btnText === 'Update' && i === this.tblIndex) {
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
    if (this.btnText === 'Add' && count === 0) {
      this.alertBox.alert = true;
      this.alertBox.msg = 'Do you want to add this passenger?';
      this.alertService.reply.observers = [];
      this.alertService.reply.subscribe(reply => {
        if (reply) {
          this.transportManagerService.addPassengerToDelivery(this.passenger).subscribe((passenger) => {
            this.deliveryDetail.deliveryPassengerDetails.push(passenger);
            this.notifierService.notify("success", "Passenger added successfully");
            this.setNewPassenger();
          })
        }
        this.alertBox.alert = false;
      })
    } else if (this.btnText === 'Update' && count === 0) {
      this.alertBox.alert = true;
      this.alertBox.msg = 'Do you want to update this passenger?';
      this.alertService.reply.observers = [];
      this.alertService.reply.subscribe(reply => {
        if (reply) {
          this.transportManagerService.updatePassengerOnDelivery(this.passenger).subscribe((passenger) => {
            this.deliveryDetail.deliveryPassengerDetails[this.tblIndex] = passenger
            this.notifierService.notify("success", "Passenger updated successfully");
            this.setNewPassenger();
          })
        }
        this.alertBox.alert = false;
      })
    }

    // // console.log(this.item)
    // if (this.btnText === 'Add') {
    //   this.transportManagerService.addPassengerToDelivery(this.passenger).subscribe((passenger) => {
    //     this.deliveryDetail.deliveryPassengerDetails.push(passenger);
    //   })
    // } else if (this.btnText === 'Update') {
    //   // console.log(this.item)
    //   this.transportManagerService.updatePassengerOnDelivery(this.passenger).subscribe((passenger) => {
    //     this.deliveryDetail.deliveryPassengerDetails[this.tblIndex] = passenger
    //   })
    // }
    // this.setNewPassenger();
  }

  removePassenger(passengerDetailId, i) {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to remove this passenger?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.transportManagerService.deletePassengerOnDelivery(passengerDetailId).subscribe((reply) => {
          if (reply) {
            this.deliveryDetail.deliveryPassengerDetails.splice(i, 1)
            this.notifierService.notify("success", "Passenger deleted successfully");
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
            this.router.navigate(['/main/view_passenger_delivery'])
          }
        })
      }
      this.alertBox.alert = false;
    })
  }

  setPassenger(passenger, i) {
    this.tblIndex = i;
    this.passenger.passengerDetailId = passenger.passengerDetailId;
    this.passenger.passengerName = passenger.passengerName;
    this.passenger.passengerNic = passenger.passengerNic;
    this.passenger.contactNumber = passenger.contactNumber;
    this.passenger.passengerType = passenger.passengerType;
    this.btnText = 'Update';
  }

  setNewPassenger() {
    this.passenger = this.getNewPassenger();
    this.passengerForm.resetForm();
    this.btnText = 'Add';
  }

  getNewPassenger() {
    return {
      passengerDetailId: '',
      passengerName: '',
      passengerNic: '',
      contactNumber: '',
      passengerType: '',
      delivery: {
        deliveryId: ''
      }
    };
  }

  getMinDate() {
    return this.transportManagerService.getCurDate();
  }
}
