import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DriverService} from "../../../../../_service/driver.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {
  @ViewChild('driverRegistrationForm', {static: true}) public driverRegistrationForm: NgForm;
  driverDetail = {
    lisenseID: '',
    userAccount: {
      employeeID: '',
      accountType: 'DR',
      nic: '',
      dob: '',
      name: '',
      address: '',
      contactNo: '',
      email: '',
      registeredDate: '',
      nameWithInitials: '',
      password: '',
    }
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  constructor(private driverService: DriverService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
    this.driverDetail = this.getDriver();
  }

  ngOnInit(): void {
    this.driverDetail =this.driverService.driver;
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update this account?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    console.log(this.driverDetail);
    this.driverService.updateDriver(this.driverDetail).subscribe((driverDetail) => {
      this.router.navigate(['main/driver_account']);
      this.notifierService.notify("success", "Driver updated successfully.");
    }, (err) => {
      this.notifierService.notify("error", "Update failed");
    })
      }
      this.alertBox.alert = false;
    })
  }

  getDriver() {
    return {
      lisenseID: '',
      userAccount: {
        employeeID: '',
        accountType: 'DR',
        nic: '',
        dob: '',
        name: '',
        address: '',
        contactNo: '',
        email: '',
        registeredDate: '',
        nameWithInitials: '',
        password: ''
      }
  };
}}
