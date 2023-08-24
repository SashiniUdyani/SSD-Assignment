import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../../../_service/driver.service";
import {Router} from "@angular/router";
import {ApplicantService} from "../../../../_service/applicant.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-applicant-regestration',
  templateUrl: './applicant-regestration.component.html',
  styleUrls: ['./applicant-regestration.component.css']
})
/** @title Form field with prefix & suffix */

export class ApplicantRegestrationComponent implements OnInit {

App={
  userAccount:{
    employeeID: "",
    accountType: "AP",
    nic: "",
    dob: "",
    name: "",
    address: "",
    nameWithInitials:"",
    contactNo: "",
    email: "",
    registeredDate: "",
    password: "",
    approved:true
  }
}

  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };

  btn:boolean=true;
  type="text";

  constructor(private applicant: ApplicantService, private router: Router) {

  }
  ngOnInit(): void {


  }

  onSubmit() {
    console.log(this.App);

    // this.passengerpassengerApp.passengerApplication.noOfPassengers=this.z
    this.applicant.RegisterApplicant(this.App).subscribe((deliveryDetail) => {
      this.router.navigate(['/login'])
    })
    return false;
  }

  hide(){
this.type="password"
    this.btn=false
  }
  show(){
    this.type="text"
    this.btn=true
  }

  getMinDate() {
    return this.applicant.getCurDate();
  }

  demo(){

      this.App.userAccount.employeeID= "10000",
        this.App.userAccount.accountType= "AP",
      this.App.userAccount.nic= "111111111111",
      this.App.userAccount.dob= "2000-01-23",
      this.App.userAccount.name="abc",
      this.App.userAccount.address= "11/3 abc street",
      this.App.userAccount.nameWithInitials="a.b c",
      this.App.userAccount.contactNo= "077-6322294",
      this.App.userAccount.email= "abc@gmail.com",
      this.App.userAccount.registeredDate= "2021-01-23",
      this.App.userAccount.password= "asd",
      this.App.userAccount.approved=true

  }

}
