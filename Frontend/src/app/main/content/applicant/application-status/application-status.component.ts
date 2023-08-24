import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApplicantService} from "../../../../_service/applicant.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  @ViewChild('applicantFrom', {static: true}) public applicantFrom: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
  @ViewChild('applicationStatus', {static: true}) public applicationStatus: NgForm;


  ItemApp = {

    applicationID: "",
    approval: "",
    arrivaleDate: "",
    depatureDate: "",
    reason: "",
    vehicleType: "",
    destination: "",
    type: 'I',
    itemApplication: {
      itemItemApplications: []
    }
  }
  duplicate: boolean;
  Pass = {
    item: {
      itemID: '',
      itemName: '',
      qty: 0
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
  viewAllItem = [];

  constructor(private applicant: ApplicantService, private router: Router, private notifierService: NotifierService,private alertService: AlertBoxService,private commonService: CommonService) {
    //this.Pass = this.getNewPassenger();
  }

  ngOnInit(): void {
    this.applicant.getAllItem().subscribe((deliveryItemDetails) => {
      //console.log(deliveryItemDetails)
      this.viewAllItem = deliveryItemDetails
    })
  }

  onSubmit() {
    // console.log(this.ItemApp);
    // this.applicant.addItem(this.ItemApp).subscribe((deliveryDetail) => {
    //   this.router.navigate(['/main/available_transports'])
    // })
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to Insert ?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.applicant.addItem(this.ItemApp).subscribe((deliveryDetail) => {
          this.router.navigate(['/main/available_transports'])
          this.notifierService.notify("success", "Form Inserted Successfully");
        }, (err) => {
          this.notifierService.notify("error", "Form Insert Failed");
        })
      }
      this.alertBox.alert = false;
    })
  }

  btnText = '';
  flag;

  setNumberPositive(val) {
    if (val < 0) {
      return val * -1;
    } else if (val === 0) {
      return 1;
    } else {
      return val;
    }
  }
  onSubmitItem() {
    if (this.plus == true) {
      let check = this.Pass;
      this.flag = 1;

      console.log(check);
      for (let x = 0; x <= this.ItemApp.itemApplication.itemItemApplications.length - 1; x++) {
        let a = this.ItemApp.itemApplication.itemItemApplications[x];
        console.log(a);
        if (a.item.itemID == check.item.itemID) {
          this.flag = 0;
          break;
        } else {
          this.flag = 1;
        }

      }
      if (this.flag == 1) {
        this.ItemApp.itemApplication.itemItemApplications.push(this.Pass);
        this.notifierService.notify("success", "Item Added successfully");
      } else if (this.flag == 0) {
        this.notifierService.notify("error", "Item Id duplicated");
      }

      //this.passengerForm.resetForm();
    } else if (this.pen == true) {
      this.ItemApp.itemApplication.itemItemApplications[this.tblIndex] = this.Pass
    }

    this.setNewItem();
  }

  setNewItem() {
    this.Pass = this.getNewItem();
    this.passengerForm.resetForm(this.Pass.item);
    this.plus = true;
    this.pen = false;
  }

  // chkPassengerId() {
  //   if (this.Pass.item.itemID != '') {
  //      this.flag = 1;
  //   }
  // }

  setItem(item, i) {
    this.tblIndex = i;
    this.Pass.item.itemID = item.itemID;
    this.Pass.item.itemName = item.itemName;
    this.Pass.item.qty = item.qty
    this.btnText = 'Update';
    this.pen = true;
    this.plus = false;
  }

  getNewItem() {
    return {
      item: {
        itemID: '',
        itemName: '',
        qty: 0
      }
    };
  }

  dep;
  checkDate(){
    this.dep=0;
    if(this.ItemApp.arrivaleDate!=''&& this.ItemApp.depatureDate!='')
    {
      if(this.ItemApp.arrivaleDate<this.ItemApp.depatureDate)
        // this.notifierService.notify("error", " Depature Date must be less than Arrival date ");
        this.dep=1;
    }
    else {
      this.dep=0;
    }
  }

  demo(){

    this.ItemApp.arrivaleDate= '2021-02-02T03:12',
      this.ItemApp.depatureDate= "2021-02-02T03:12",
      this.ItemApp.reason= "Repair",
      this.ItemApp.vehicleType= "Van",
      this.ItemApp.destination= "Colombo 07"

  }


  chkItemId() {

    // console.log(this.viewAllItem)
    // let p =this.viewAllItem[0]
    // console.log(p)

    for (let x = 0; x <= this.viewAllItem.length - 1; x++) {

      let p = this.viewAllItem[x]

      if (this.Pass.item.itemID === '') {
        this.setNewItem()
      } else if (this.Pass.item.itemID !== '') {
        //  console.log(this.Pass.passenger.passengerId)
        this.duplicate = false;
        if (this.Pass.item.itemID === p.itemID) {
          console.log(p)
          this.Pass.item.itemName = p.itemName;
          this.Pass.item.qty = p.qty;
          break;
        } else {
          this.Pass.item.itemName = ''
        }
      }
    }
  }

  getMinDate() {
    return this.applicant.getCurDate() + 'T00:00';
  }

}
