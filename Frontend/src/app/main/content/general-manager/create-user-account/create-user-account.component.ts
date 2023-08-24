import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";


@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {

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
    "Transport Manager",
    "Booking Management Clerk",
    "Vehicle and Driver Management Clerk",
    "Accident and Maintenance Clerk",
    "Security Officer",
    "General Manager"
  ]
  selected = ""

  update(e) {
    this.selected = e.target.value
  }

  account;
  btnText = 'Create Account';
  tblIndex;

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

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this account?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        if (this.userAccount.accountType === 'Transport Manager') {
          let transportManager = {
            userAccount: this.userAccount
          }
          // console.log(transportManager)
          this.generalManagerService.addTransportManagerUserAccount(transportManager).subscribe((userAccount) => {
            this.notifierService.notify("success", "User Account added successfully");
            this.setNewForm();
            //  this.router.navigate(['/main/user_account_list'])
          }, (err) => {
            this.notifierService.notify("error", "Adding failed");
          })
        } else if (this.userAccount.accountType === 'Booking Management Clerk') {
          let bookingManagementClerk = {
            userAccount: this.userAccount
          }
          this.generalManagerService.addBookingManagementClerkUserAccount(bookingManagementClerk).subscribe((userAccount) => {
            this.notifierService.notify("success", "User Account added successfully");
            this.setNewForm();
            //this.router.navigate(['/main/user_account_list'])
          }, (err) => {
            this.notifierService.notify("error", "Adding failed");
          })
        } else if (this.userAccount.accountType === 'Vehicle and Driver Management Clerk') {
          let vehicleDriverManagementClerk = {
            userAccount: this.userAccount
          }
          this.generalManagerService.addVehicleDiverManagementClerkUserAccount(vehicleDriverManagementClerk).subscribe((userAccount) => {
            this.notifierService.notify("success", "User Account added successfully");
            this.setNewForm();
            // this.router.navigate(['/main/user_account_list'])
          }, (err) => {
            this.notifierService.notify("error", "Adding failed");
          })
        } else if (this.userAccount.accountType === 'Accident and Maintenance Clerk') {
          let accidentMaintenanceClerk = {
            userAccount: this.userAccount
          }

          this.generalManagerService.addAccidentMaintenanceManagerUserAccount(accidentMaintenanceClerk).subscribe((userAccount) => {
            this.notifierService.notify("success", "User Account added successfully");
            this.setNewForm();
            // this.router.navigate(['/main/user_account_list'])
          }, (err) => {
            this.notifierService.notify("error", "Adding failed");
          })
        } else if (this.userAccount.accountType === 'Security Officer') {
          let securityOfficer = {
            userAccount: this.userAccount
          }

          this.generalManagerService.addSecurityOfficerUserAccount(securityOfficer).subscribe((userAccount) => {
            this.notifierService.notify("success", "User Account added successfully");
            this.setNewForm();
            // this.router.navigate(['/main/user_account_list'])
          }, (err) => {
            this.notifierService.notify("error", "Adding failed");
          })
        }

      }
      this.alertBox.alert = false;
    })

  }

  setNewForm() {
    this.createUserAccountForm.resetForm();
  }

  getMaxDate() {
    return this.generalManagerService.getCurDate();
  }


    demoForm() {
    this.userAccount.employeeID = '10010';
    this.userAccount.accountType = 'Security Officer';
    this.userAccount.nic = '997845234V';
    this.userAccount.dob = '1999-09-08';
    this.userAccount.name = 'Udyani';
    this.userAccount.address = 'Bandarawela';
    this.userAccount.contactNo = '074-9867177';
    this.userAccount.email = 'udyani@gmail.com';
    this.userAccount.registeredDate = '2018-12-12';
    this.userAccount.nameWithInitials = 'A.B.Udyani';
    this.userAccount.password = 'udyani';
  }


}

