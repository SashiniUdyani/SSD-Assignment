import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GeneralManagerService} from "../../../../../_service/general-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-user-account',
  templateUrl: './update-user-account.component.html',
  styleUrls: ['./update-user-account.component.css']
})
export class UpdateUserAccountComponent implements OnInit {

  @ViewChild('createUserAccountForm', {static: true}) public createUserAccountForm: NgForm;

  userAccount = {
    employeeID: '',
    accountType: '',
    nic: '',
    dob: '',
    name: '',
    address: '',
    contactNo: '',
    email: '',
    registeredDate: '',
    nameWithInitials: '',
    password: ''
  };

  accountTypes = [
    {
      accType: "TM",
      accTypename: "Transport Manager"
    },
    {
      accType: "BMC",
      accTypename: "Booking Management Clerk"
    },
    {
      accType: "VDM",
      accTypename: "Vehicle and Driver Management Clerk"
    },
    {
      accType: "VMC",
      accTypename: "Accident and Maintenance Clerk"
    },
    {
      accType: "SO",
      accTypename: "Security Officer"
    }
    ,
    {
      accType: "GM",
      accTypename: "General Manager"
    }
  ]
  selected = ""

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  constructor(private generalManagerService: GeneralManagerService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService
  ) {
    this.userAccount = this.getUserAccount();
  }

  ngOnInit(): void {
    this.userAccount = this.generalManagerService.userAccount;
  }

  onSubmit() {
    //console.log(this.userAccount)
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update user account?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.generalManagerService.updateUserAccount(this.userAccount).subscribe((userAccount) => {
          this.notifierService.notify("success", "Account updated successfully");
          this.router.navigate(['/main/user_account_list'])
        })
      }
      this.alertBox.alert = false;
    })

  }

  // setUserAccount(userAccount, i) {
  //   this.tblIndex = 1;
  //   this.userAccount.email = userAccount.email;
  //   this.userAccount.name = userAccount.name;
  //   this.userAccount.address = userAccount.address;
  //   this.userAccount.contactNo = userAccount.contactNo;
  //   this.btnText = 'Update';
  // }
  //
  getUserAccount() {
    return {
      employeeID: '',
      accountType: '',
      nic: '',
      dob: '',
      name: '',
      address: '',
      contactNo: '',
      email: '',
      registeredDate: '',
      nameWithInitials: '',
      password: ''

    };
  }


}
