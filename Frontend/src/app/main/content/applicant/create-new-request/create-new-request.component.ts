import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ApplicantService} from "../../../../_service/applicant.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";


@Component({
  selector: 'app-create-new-request',
  templateUrl: './create-new-request.component.html',
  styleUrls: ['./create-new-request.component.css']
})
export class CreateNewRequestComponent implements OnInit {
  @ViewChild('applicantFrom', {static: true}) public applicantFrom: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;


  passengerpassengerApp = {

    applicationID: '',
    arrivaleDate: '',
    depatureDate: "",
    reason: '',
    vehicleType: '',
    destination: '',
    type: 'P',
    passengerApplication: {
      noOfPassengers: 0,
      passengerPassengerApplications: []
    },
    // itemApplication:{
    //   itemItemApplications: [
    //
    //   ]
    // }
  }

  Pass = {
    passenger: {
      passengerId: ''
    }
  };
  tblIndex;
  PassengerDB = []; //DB Passenger
  ViewPassenger = [];//View Passenger
  y = 0; //DB Passenger size
  z = 0; //Array size

  errorP =2; //
  passengerOBJ; //Array Object
  flag;

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

// Item ={
//   item:{
//     itemID:'',
//     itemName:'',
//     qty:''
//   }
// }
  //Passenger.name;
  // x={
  //   applicationID:'',
  //
  //
  //
  // };
  //

  constructor(private applicant: ApplicantService, private router: Router,private notifierService: NotifierService,private alertService: AlertBoxService) {
    //  this.Pass.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {
    this.errorP = 2;
    this.getAllIPassengers()
  }

  getAllIPassengers() {
    this.applicant.getAllPassengers().subscribe((deliveryItemDetails) => {
      this.PassengerDB = deliveryItemDetails;
      this.y = deliveryItemDetails.length;
      this.passengerpassengerApp.passengerApplication.noOfPassengers=this.y;
    })
  }

  onSubmit() {
    console.log(this.passengerpassengerApp);
    // this.passengerpassengerApp.passengerApplication.noOfPassengers=this.z
    // this.applicant.addApp(this.passengerpassengerApp).subscribe((deliveryDetail) => {
    //   this.router.navigate(['/main/available_transports'])
    // })
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to Insert ?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.applicant.addApp(this.passengerpassengerApp).subscribe((deliveryDetail) => {
          this.router.navigate(['/main/available_transports'])
          this.notifierService.notify("success", "Form Inserted Successfully");
        }, (err) => {
          this.notifierService.notify("error", "Form Insert Failed");
        })
      }
      this.alertBox.alert = false;
    })

  }

  chkPassengerId() {
    if (this.Pass.passenger.passengerId != '') {
      this.flag==1;
      this.errorP=2;
    }
  }


  createAccount(){
    this.router.navigate(['/applicant_regestration'])
  }
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

  onSubmitPassenger() {
    let check=this.Pass;
    this.flag=1;
    for (let x=0; x<=this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.length-1; x++)
    {
      let a=this.passengerpassengerApp.passengerApplication.passengerPassengerApplications[x];
      console.log(a);
      if(a.passenger.passengerId==check.passenger.passengerId){
        this.flag=0;
        this.notifierService.notify("error", " Passenger ID is Duplicated");
        break;
      }
      else {
        this.flag=1;
      }
    }
    if(this.flag==1)
    {
      for (let z = 0; z <= this.y-1; z++) {
        this.passengerOBJ = this.PassengerDB[z];
        if (this.Pass.passenger.passengerId === this.passengerOBJ.passengerId) {
          this.notifierService.notify("success", "Passenger Added successfully");
          this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.push(this.Pass);
          this.z = this.passengerpassengerApp.passengerApplication.passengerPassengerApplications.length;
          this.ViewPassenger.push(this.passengerOBJ);
          console.log(this.passengerOBJ)
          this.errorP = 0;
          break;
        } else {
          this.errorP = 1;
        }
      }
      if(this.errorP==1)
        this.notifierService.notify("error", "Passenger not found");
    }
    this.setNewPassenger();
  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.passenger);

  }

  setPassenger(passenger, i) {
    this.tblIndex = i;
    this.Pass.passenger.passengerId = passenger.passengerId;

  }

  getNewPassenger() {
    return {
      passenger:
        {
          passengerId: ''
        },
    };
  }
  getMinDate() {
    return this.applicant.getCurDate() + 'T00:00';
  }

  demo(){

         this.passengerpassengerApp.arrivaleDate= '2021-07-02T03:12',
        this.passengerpassengerApp.depatureDate= "2021-07-02T03:12",
        this.passengerpassengerApp.reason= "Repair",
        this.passengerpassengerApp.vehicleType= "Van",
        this.passengerpassengerApp.destination= "Colombo 07"

  }

}
