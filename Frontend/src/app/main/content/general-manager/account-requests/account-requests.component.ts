import {Component, OnInit} from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-requests',
  templateUrl: './account-requests.component.html',
  styleUrls: ['./account-requests.component.css']
})
export class AccountRequestsComponent implements OnInit {

  userAccountDetails = [];

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

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };


  employeeID;
  selectedUserAccount;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUserAccountsForApplicants();
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  // getUserAccounts() {
  //   this.generalManagerService.getUserAccounts().subscribe((userAccountDetails) => {
  //     this.userAccountDetails = userAccountDetails;
  //     // console.log(this.vehicles)
  //   })
  // }

  getUserAccountsForApplicants() {
    this.generalManagerService.getUserAccountsForApplicants().subscribe((userAccountDetails) => {
      this.userAccountDetails = userAccountDetails;
      // console.log(this.vehicles)
    })
  }

  getUserAccountByID() {
    this.generalManagerService.getUserAccountByID(this.employeeID).subscribe((userAccountDetails) => {
      this.userAccountDetails = userAccountDetails;
      // console.log(this.vehicles)
    })
  }

  setUserAccount(userAccount) {
    this.selectedUserAccount = userAccount;
    this.isTrueOrFalse(true);
  }

  approveUserAccount(approval) {
    this.generalManagerService.approveUserAccount(this.selectedUserAccount.employeeID, approval).subscribe((userAccount) => {
      this.selectedUserAccount.approved = userAccount.approved;
    })
  }
}
