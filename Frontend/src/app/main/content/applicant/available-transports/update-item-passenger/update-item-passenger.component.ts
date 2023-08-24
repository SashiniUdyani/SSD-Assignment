import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApplicantService} from "../../../../../_service/applicant.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-item-passenger',
  templateUrl: './update-item-passenger.component.html',
  styleUrls: ['./update-item-passenger.component.css']
})
export class UpdateItemPassengerComponent implements OnInit {
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
    },
    itemApp: {
      noOfItems: '',
      itemApplicationID: '',
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

  Item = {
    item: {
      itemID: '',
      itemName: '',
      qty: ''
    }
  };

  flag;
  tblIndex;
  plus: boolean = true; //plus button
  pen: boolean = false;//pen button
  DBPassP;
  DBPassI;
  PassengerDB = []; //DB Passenger
  ItemDB= []  //DB Item
  ViewPassenger;//View Passenger
  ViewItem;
  viewAllItem=[];
  y = 0; //DB Passenger size
  z = 0; //Array size

  errorP = 2; //
  passengerOBJ; //Array Object

  constructor(private applicantService: ApplicantService, private router: Router, private notifierService: NotifierService,private alertService: AlertBoxService) {

    // this.item = this.getNewItem();
  }

  viewUpdete: boolean;
  duplicate:boolean;

  ngOnInit(): void {

    this.applicantService.getAllItem().subscribe((deliveryItemDetails) => {
      //console.log(deliveryItemDetails)
      this.viewAllItem=deliveryItemDetails

    })
    this.passengerpassengerApp = this.applicantService.deliveryItem;
   // console.log(this.applicantService.deliveryItem.bookingApplicationId)
    if (this.applicantService.deliveryItem.bookingApplicationId === "null")
      this.viewUpdete = true
    else
      this.viewUpdete = false
    this.getAllIPassengers()
    this.getAllItems()
  }


  getAllIPassengers() {
    this.applicantService.GetPassengerApp(this.passengerpassengerApp.applicationID).subscribe((deliveryItemDetails) => {
      this.PassengerDB = deliveryItemDetails;
      this.DBPassP = this.PassengerDB;
      this.ViewPassenger = this.DBPassP.passengerApplication.passengerPassengerApplications;
       console.log(this.ViewPassenger);
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
      //  console.log(c.passenger)
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

  getAllItems() {
    this.applicantService.GetItemApp(this.passengerpassengerApp.applicationID).subscribe((deliveryItemDetails) => {
      this.ItemDB = deliveryItemDetails;
     // console.log(deliveryItemDetails);
      this.DBPassI = this.ItemDB;
      this.ViewItem = this.DBPassI.itemApplication.itemItemApplicationDTOS;
     //  console.log(this.ItemDB);
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

  setItem(item, j) {
    this.tblIndex = j;
    this.Item.item.itemID = item.itemID;
    this.Item.item.itemName = item.itemName;
    this.Item.item.qty = item.qty;
    console.log(this.Pass)
    this.pen = true;
    this.plus = false;
  }


  onSubmitItem() {
    //  console.log(this.passengerpassengerApp.applicationID);
    // console.log(this.Item.item);

    this.flag = 1;

    if (this.plus == true) {
      this.duplicate=false
      for(let x=0; x<=this.ViewItem.length-1; x++){
        let p =this.ViewItem[x]
        //  console.log(p.item.itemID)

        if(p.item.itemID===this.Item.item.itemID)
        {
          this.duplicate=true;
      //    console.log(this.duplicate)
          break;

        }
      }
      if(this.duplicate!==true){
        this.applicantService.AddItemApp(this.passengerpassengerApp.itemApp.itemApplicationID, this.Item.item.itemID, this.Item.item).subscribe((deliveryDetail) => {
          this.notifierService.notify("success", "Item Added successfully");
          this.getAllItems()
        })
      }
      else {
        this.notifierService.notify("error", " Item ID is Duplicated");
      }
     // console.log(this.duplicate)

    }
    else if (this.pen == true) {
     // console.log(this.Item.item)
      this.applicantService.updateItem(this.Item.item).subscribe((deliveryDetail) => {
        this.getAllItems()
      })
      this.plus = true;
      this.pen = false;
    }

    this.setNewItem();

  }

  chkItemId() {

     console.log(this.viewAllItem)
    // let p =this.viewAllItem[0]
    // console.log(p)

    for (let x = 0; x <= this.viewAllItem.length - 1; x++) {

      let p = this.viewAllItem[x]

      if(this.Item.item.itemID === ''){
        this.duplicate=false
        this.setNewItem()
      }
      else if(this.Item.item.itemID !== '') {
        //  console.log(this.Item.passenger.passengerId)
        this.duplicate = false;
        if (this.Item.item.itemID === p.itemID) {
        //  console.log(p.itemName)
          this.Item.item.itemName = p.itemName;
          this.Item.item.qty =p.qty;
          break;
        }
        else {
          this.Item.item.itemName=''
        }
      }
    }
  }

  removeItem(i, itemId) {
    this.applicantService.deleteItemApp(this.passengerpassengerApp.itemApp.itemApplicationID, itemId).subscribe((deliveryDetail) => {
      this.ngOnInit();
    })
  }

  setNewItem() {
    this.Item = this.getNewItem();
    this.passengerForm.resetForm(this.Item.item);
  }

  getNewItem() {
    return {
      item:
        {
          itemID: '',
          itemName: '',
          qty: ''
        },
    };
  }


}
