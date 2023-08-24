import {Component, OnInit} from '@angular/core';
import {DriverService} from "../../../../_service/driver.service";
import {Router} from "@angular/router";
import {CommonService} from "../../../../_service/common.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-over-time',
  templateUrl: './over-time.component.html',
  styleUrls: ['./over-time.component.css']
})
export class OverTimeComponent implements OnInit {

  addOT = {
    overTimeID: '',
    otDate: '',
    noOfShifts: 0,
    startTime: '',
    endTime: '',
    driver: {
      driverID: ''
    }
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };
  constructor(private driverService: DriverService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add OT?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    console.log(this.addOT);
    this.addOT.driver.driverID = JSON.parse(localStorage.getItem('user'))['employeeID']
    this.driverService.addOT(this.addOT).subscribe((addOT) => {
      this.router.navigate(['main/view_over_time']);
      this.notifierService.notify("success", "OT added successfully.");
    }, (err) => {
      this.notifierService.notify("error", "Adding failed");
    })
      }
      this.alertBox.alert = false;
    })
  }

  getMinDate() {
    return this.driverService.getCurDate();
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

}
