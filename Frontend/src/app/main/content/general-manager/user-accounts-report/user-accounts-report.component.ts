import { Component, OnInit } from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-user-accounts-report',
  templateUrl: './user-accounts-report.component.html',
  styleUrls: ['./user-accounts-report.component.css']
})
export class UserAccountsReportComponent implements OnInit {

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

  sendToPdf() {
    let data = document.getElementById("pdf");
    // let data = document.getElementById("maindiv");
    // console.log(data);
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg', 2.0)
      console.log(contentDataURL);
      let pdf = new jsPDF('l', 'cm', 'a3'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 2, 5, 40, 23);
      pdf.save('Filename.pdf');
    });
  }


}
