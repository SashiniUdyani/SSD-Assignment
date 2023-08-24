import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DriverService} from '../../../../_service/driver.service';
import {NotifierService} from 'angular-notifier';
import {AlertBoxService} from '../../../../alert-box/alert-box.service';

@Component({
  selector: 'app-driver-account',
  templateUrl: './driver-account.component.html',
  styleUrls: ['./driver-account.component.css']
})
export class DriverAccountComponent implements OnInit {
  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  driver = {
    driverID: '',
    userAccount: {
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
      password: '',
    },
    lisenseID: ''
  };
  driverDetails: [];

  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  constructor(private driverService: DriverService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }


  ngOnInit(): void {
    this.getDriver();
  }

  onSubmit() {
    return false;
  }

  setDriver(driverDetails) {
    this.driver = driverDetails;
    this.isTrueOrFalse(true);
  }

  goToUpdate() {
    this.driverService.driver = this.driver;
    this.router.navigate(['/main/update_driver']);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getDriver() {
    this.driverService.getDriver(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((driver) => {
      this.driver = driver;
      console.log(this.driverDetails);
    });
  }

  deleteDriver() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to delete this account?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.driverService.deleteDriver(this.driver.driverID).subscribe((reply) => {
          this.router.navigate(['login']);
          this.notifierService.notify("success", "Driver deleted successfully.");
        }, (err) => {
          this.notifierService.notify("error", "Driver delete failed");

        })
      }
      this.alertBox.alert = false;
    })
  }

}
