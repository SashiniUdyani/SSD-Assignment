import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DriverService} from "../../../../../_service/driver.service";
import {Router} from "@angular/router";
import {CommonService} from "../../../../../_service/common.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-over-time',
  templateUrl: './update-over-time.component.html',
  styleUrls: ['./update-over-time.component.css']
})
export class UpdateOverTimeComponent implements OnInit {
  @ViewChild('otForm', {static: true}) public otForm: NgForm;

  OT = {
    overTimeID:'',
    otDate:'',
    noOfShifts:0,
    startTime:'',
    endTime:''
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  constructor(private driverService: DriverService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {
    this.OT = this.getOT();
  }

  getOT() {
    return {
      overTimeID:'',
      otDate:'',
      noOfShifts:0,
      startTime:'',
      endTime:''
    };
  }

  ngOnInit(): void {
    this.OT = this.driverService.ot;
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update OT?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    console.log(this.OT);
    this.driverService.updateOT(this.OT).subscribe((OT)=>{
      this.router.navigate(['main/view_over_time']);
      this.notifierService.notify("success", "OT updated successfully.");
    }, (err) => {
      this.notifierService.notify("error", "OT Update failed");
    })
      }
      this.alertBox.alert = false;
    })
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
