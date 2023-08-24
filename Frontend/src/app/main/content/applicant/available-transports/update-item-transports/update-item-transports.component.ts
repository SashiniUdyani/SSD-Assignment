import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApplicantService} from "../../../../../_service/applicant.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../../_service/common.service";

@Component({
  selector: 'app-update-item-transports',
  templateUrl: './update-item-transports.component.html',
  styleUrls: ['./update-item-transports.component.css']
})
export class UpdateItemTransportsComponent implements OnInit {
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;

  passengerpassengerApp = {

    applicationID: "",
    approval: '',
    arrivaleDate: '',
    arrivaleDateActual: '',
    depatureDate: '',
    depatureDateActual: '',
    destination: "",
    vehicleType: "",
    reason: "",
    passengerApp: {
      noOfPassengers: '',
      passengerApplicationID: '',
      passengerPassengerApplications: []
    },
    itemApp: {
      noOfItems: '',
      itemApplicationID: '',
    }
  }


  Pass = {
    item: {
      itemID: '',
      itemName: '',
      qty: ''
    }
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  tblIndex;
  plus: boolean = true; //plus button
  pen: boolean = false;//pen button
  DBPass;
  PassengerDB = []; //DB Passenger
  ViewPassenger;//View Passenger
  viewAllItem=[];
  y = 0; //DB Passenger size
  z = 0; //Array size

  errorP = 2; //
  passengerOBJ; //Array Object

  constructor(private applicantService: ApplicantService, private router: Router,private notifierService: NotifierService,private alertService: AlertBoxService,private commonService: CommonService) {
    // this.item = this.getNewItem();
  }

  viewUpdete: boolean;

  ngOnInit(): void {

    this.applicantService.getAllItem().subscribe((deliveryItemDetails) => {
      //console.log(deliveryItemDetails)
      this.viewAllItem=deliveryItemDetails

    })
    this.passengerpassengerApp = this.applicantService.deliveryItem;

    if (this.applicantService.deliveryItem.bookingApplicationId === "null")
      this.viewUpdete = true
    else
      this.viewUpdete = false
    this.getAllIPassengers()
  }

  flag;
  duplicate:boolean;

  getAllIPassengers() {
    this.applicantService.GetItemApp(this.passengerpassengerApp.applicationID).subscribe((deliveryItemDetails) => {
      this.PassengerDB = deliveryItemDetails;
      this.DBPass = this.PassengerDB;
      this.ViewPassenger = this.DBPass.itemApplication.itemItemApplicationDTOS;
      // console.log(this.PassengerDB);
      this.y = deliveryItemDetails.length;
    })
  }
  setNumberPositive(val) {
    if (val < 0) {
      return val * -1;
    } else if (val === 0) {
      return 1;
    } else {
      return val;
    }
  }
  onSubmit() {
    // console.log(this.passengerpassengerApp)
    // this.applicantService.updateform(this.passengerpassengerApp).subscribe((deliveryDetail) => {
    //   this.router.navigate(['/main/available_transports'])
    // })
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
    //  console.log(this.passengerpassengerApp.applicationID);
   // console.log(this.Pass.item);

    this.flag = 1;

    if (this.plus == true) {
      this.duplicate=false
      for(let x=0; x<=this.ViewPassenger.length-1; x++){
        let p =this.ViewPassenger[x]
      //  console.log(p.item.itemID)

        if(p.item.itemID===this.Pass.item.itemID)
        {
          this.duplicate=true;
          console.log(this.duplicate)
            break;

        }
      }
      if(this.duplicate!==true){
        this.applicantService.AddItemApp(this.passengerpassengerApp.itemApp.itemApplicationID, this.Pass.item.itemID, this.Pass.item).subscribe((deliveryDetail) => {
          this.notifierService.notify("success", "Item Added successfully");
          this.getAllIPassengers()
        })
      }
      else {
        this.notifierService.notify("error", " Item ID is Duplicated");
      }
      console.log(this.duplicate)

    }
    else if (this.pen == true) {
      console.log(this.Pass.item)
      this.applicantService.updateItem(this.Pass.item).subscribe((deliveryDetail) => {
        this.getAllIPassengers()
      })
      this.plus = true;
      this.pen = false;
    }

    this.setNewPassenger();

  }

  chkPassengerId() {

    // console.log(this.viewAllItem)
    // let p =this.viewAllItem[0]
    // console.log(p)

    for (let x = 0; x <= this.viewAllItem.length - 1; x++) {

      let p = this.viewAllItem[x]

       if(this.Pass.item.itemID === ''){
         this.duplicate=false
        this.setNewPassenger()
      }
      else if(this.Pass.item.itemID !== '') {
          //  console.log(this.Pass.passenger.passengerId)
          this.duplicate = false;
        if (this.Pass.item.itemID === p.itemID) {
          console.log(p.itemName)
          this.Pass.item.itemName = p.itemName;
          this.Pass.item.qty =p.qty;
          break;
        }
        else {
          this.Pass.item.itemName=''
        }
        }
    }
  }

  removePassenger(i, itemId) {
    this.applicantService.deleteItemApp(this.passengerpassengerApp.itemApp.itemApplicationID, itemId).subscribe((deliveryDetail) => {
      this.ngOnInit();
    })
  }

  setNewPassenger() {
    this.Pass = this.getNewPassenger();
    this.passengerForm.resetForm(this.Pass.item);
  }

  getNewPassenger() {
    return {
      item:
        {
          itemID: '',
          itemName: '',
          qty: ''
        },
    };
  }



  removeDelivery() {
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

  setPassenger(item, j) {
    this.tblIndex = j;
    this.Pass.item.itemID = item.itemID;
    this.Pass.item.itemName = item.itemName;
    this.Pass.item.qty = item.qty;
    console.log(this.Pass)
    this.pen = true;
    this.plus = false;
  }

  getMinDate() {
    return this.applicantService.getCurDate() + 'T00:00';
  }
}
