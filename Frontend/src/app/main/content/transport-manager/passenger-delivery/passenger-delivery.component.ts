import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-passenger-delivery',
  templateUrl: './passenger-delivery.component.html',
  styleUrls: ['./passenger-delivery.component.css']
})
export class PassengerDeliveryComponent implements OnInit {

  @ViewChild('deliveryForm', {static: true}) public deliveryForm: NgForm;
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
    deliveryPassengerDetails: []
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

  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this delivery?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTime
        this.transportManagerService.addPassengerDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
          this.setNewForm();
          this.notifierService.notify("success", "Delivery added successfully");
          // this.router.navigate(['/main/view_passenger_delivery'])
        }, (err) => {
          this.notifierService.notify("error", "Delivery failed");
        })
      }
      this.alertBox.alert = false;
    })
  }

  onSubmitPassenger() {
    if (this.deliveryDetail.deliveryPassengerDetails.length === 0) {
      this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
      this.notifierService.notify("success", "Passenger added successfully");
      this.setNewPassenger();
    } else {
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
        this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
        this.notifierService.notify("success", "Passenger added successfully");
        this.setNewPassenger();
      } else if (this.btnText === 'Update' && count === 0) {
        this.deliveryDetail.deliveryPassengerDetails[this.tblIndex] = this.passenger
        this.notifierService.notify("success", "Passenger updated successfully");
        this.setNewPassenger();
      }
    }
  }

  setPassenger(passenger, i) {
    this.tblIndex = i;
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

  setNewForm() {
    this.deliveryForm.resetForm();
    this.deliveryDetail.deliveryPassengerDetails = [];
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
}
