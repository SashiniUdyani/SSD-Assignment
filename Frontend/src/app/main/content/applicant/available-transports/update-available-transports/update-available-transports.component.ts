import {Component, OnInit, ViewChild} from '@angular/core';
import {TransportManagerService} from "../../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {ApplicantService} from "../../../../../_service/applicant.service";
import {NgForm} from "@angular/forms";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-available-transports',
  templateUrl: './update-available-transports.component.html',
  styleUrls: ['./update-available-transports.component.css']
})
export class UpdateAvailableTransportsComponent implements OnInit {
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;

  passengerpassengerApp = {

    applicationID: "",
    approval: false,
    arrivaleDate: null,
    arrivaleDateActual: '',
    depatureDate: null,
    depatureDateActual: '',
    destination: "",
    vehicleType: "",
    reason: "",
    passengerApp: {
      noOfPassengers: 0,
      passengerApplicationID: '',
      passengerPassengerApplications: []
    }
  }

  // applicationID: "App20210911113145"
  // approval: false
  // arrivaleDate: "2021-09-29 11:31 AM"
  // arrivaleDateActual: "2021-09-29T11:31:00"
  // depatureDate: "2021-09-22 11:31 AM"
  // depatureDateActual: "2021-09-22T11:31:00"
  // destination: "Jaffna"
  // passengerApp: {passengerApplicationID: 'PassApp20210911113145', noOfPassengers: 1, passengerPassengerApplications: Array(3)}
  // passengerApplicationDTO: null
  // reason: "Repair"
  // type: "P"
  // vehicleType: "Bus"
  //


  Pass = {
    passenger: {
      passengerId: ''
    }
  };

  tblIndex;
  DBPass;
  PassengerDB = []; //DB Passenger
  ViewPassenger;//View Passenger
  y = 0; //DB Passenger size
  z = 0; //Array size

  errorP = 2; //
  passengerOBJ; //Array Object

  constructor(private applicantService: ApplicantService, private router: Router, private notifierService: NotifierService,private alertService: AlertBoxService) {

    // this.item = this.getNewItem();
  }

  viewUpdete: boolean;

  ngOnInit(): void {
    this.passengerpassengerApp = this.applicantService.deliveryItem;
    console.log(this.applicantService.deliveryItem.bookingApplicationId)
    if (this.applicantService.deliveryItem.bookingApplicationId === "null")
      this.viewUpdete = true
    else
      this.viewUpdete = false
    this.getAllIPassengers()
  }

  flag: boolean;

  getAllIPassengers() {
    this.applicantService.GetPassengerApp(this.passengerpassengerApp.applicationID).subscribe((deliveryItemDetails) => {
      this.PassengerDB = deliveryItemDetails;
      this.DBPass = this.PassengerDB;
      this.ViewPassenger = this.DBPass.passengerApplication.passengerPassengerApplications;
      // console.log(this.PassengerDB);
      this.y = deliveryItemDetails.length;
      this.passengerpassengerApp.passengerApp.noOfPassengers=this.y
    })
  }

  // onSubmit() {
  //   this.alertBox.alert = true;
  //   this.alertBox.msg = 'Do you want to add this delivery?';
  //   this.alertService.reply.observers = [];
  //   this.alertService.reply.subscribe(reply => {
  //   // console.log(this.passengerpassengerApp)
  //   this.applicantService.updateform(this.passengerpassengerApp).subscribe((deliveryDetail) => {
  //     this.router.navigate(['/main/available_transports'])
  //   })
  //   })
  // }
  dep;
  checkDate(){
    this.dep=0;
    if(this.passengerpassengerApp.arrivaleDate!=''&& this.passengerpassengerApp.depatureDate!='')
    {
      if(this.passengerpassengerApp.arrivaleDate<this.passengerpassengerApp.depatureDate)
        // this.notifierService.notify("error", " Depature Date must be less than Arrival date ");
        this.dep=1;
    }
    else {
      this.dep=0;
    }
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update the form ?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.applicantService.updateform(this.passengerpassengerApp).subscribe((deliveryDetail) => {
          this.router.navigate(['/main/available_transports'])
          this.notifierService.notify("success", "Form updated successfully");
        }, (err) => {
          this.notifierService.notify("error", "Form update failed");
        })
      }
      this.alertBox.alert = false;
    })
  }




  onSubmitPassenger() {
    //  console.log(this.passengerpassengerApp.applicationID);
    //  console.log(this.Pass.passenger.passengerId);
    this.applicantService.AddPassengerApp(this.passengerpassengerApp.passengerApp.passengerApplicationID, this.Pass.passenger.passengerId).subscribe((deliveryDetail) => {
      this.ngOnInit();
      let c = deliveryDetail
      if (c !== null) {
        console.log(c.passenger)
        this.flag = true;
        this.set1(this.flag)
      } else {
        this.flag = false;
        this.set1(this.flag)
      }
    })

    // this.set2(this.flag=false)
    this.setNewPassenger();
  }

  set1(x) {
    if (x == true) {
      this.notifierService.notify("success", "Passenger Id Found");
    }
    else {
      this.notifierService.notify("error", "Passenger Id Not Found");
    }
  }

  set2() {
    this.notifierService.notify("error", "Passenger Id Not Found");
  }

  chkPassengerId() {
    if (this.Pass.passenger.passengerId != '') {
      //  console.log(this.Pass.passenger.passengerId)
      // this.flag=2;
    }
  }


  removePassenger(i, passengerId) {
    this.applicantService.deletePassengerApp(this.passengerpassengerApp.passengerApp.passengerApplicationID, passengerId).subscribe((deliveryDetail) => {
      this.ngOnInit();
    })

  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.passenger);
  }

  getNewPassenger() {
    return {
      passenger:
        {passengerId: ''},
    };
  }

  removeForm() {
    // this.applicantService.deleteForm(this.passengerpassengerApp.applicationID).subscribe((deliveryDetail) => {
    //   this.router.navigate(['/main/available_transports']);
    // })

    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to delete the form ?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.applicantService.deleteForm(this.passengerpassengerApp.applicationID).subscribe((deliveryDetail) => {
          this.router.navigate(['/main/available_transports']);
          this.notifierService.notify("success", "Form deleted successfully");
        }, (err) => {
          this.notifierService.notify("error", "Delete failed");
        })
      }
      this.alertBox.alert = false;
    })


  }
  getMinDate() {
    return this.applicantService.getCurDate() + 'T00:00';
  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

}
