import {Component, OnInit} from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-account-list',
  templateUrl: './user-account-list.component.html',
  styleUrls: ['./user-account-list.component.css']
})
export class UserAccountListComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };


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
    userAccountDetails: []
  };

  employeeID;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUserAccounts();
  }


  setUserAccount(userAccount) {
    this.userAccount = userAccount;
    this.isTrueOrFalse(true);
  }

  goToUpdate(userAccount) {
    this.generalManagerService.userAccount = userAccount;
    this.router.navigate(['/main/update_user_account']);
    console.log(userAccount);
  }


  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getUserAccounts() {
    this.generalManagerService.getUserAccounts().subscribe((userAccountDetails) => {
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


}
