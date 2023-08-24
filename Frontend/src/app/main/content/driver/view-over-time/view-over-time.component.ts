import {Component, OnInit} from '@angular/core';
import {DriverService} from '../../../../_service/driver.service';
import {Router} from '@angular/router';
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-view-over-time',
  templateUrl: './view-over-time.component.html',
  styleUrls: ['./view-over-time.component.css']
})
export class ViewOverTimeComponent implements OnInit {
  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };

  otDetails = [];

  ot = {
    overTimeID: '',
    otDate: '',
    noOfShifts: '',
    startTime: '',
    endTime: '',
    approval:false,
    driver_driverid: ''
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
    this.getOT();
    this.getMyOT();
  }

  setOT(otDetails) {
    this.ot = otDetails;
    this.isTrueOrFalse(true);
  }

  goToUpdate(otDetails) {
    this.driverService.ot = otDetails;
    this.router.navigate(['/main/update_over_time']);
    console.log(otDetails);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getOT() {
    this.driverService.getOT().subscribe((ot) => {
      this.otDetails = ot;
    });
  }

  deleteOT() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to delete this OT?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
      this.driverService.deleteOT(this.ot.overTimeID).subscribe((reply) => {
        if (reply) {
          this.router.navigate(['/main/over_time']);
          this.notifierService.notify("success","OT deleted successfully")
        }
      },(err)=>{
        this.notifierService.notify("error", "OT delete  failed");
        }
      )
      }
      this.alertBox.alert = false;
    }
    )
  }

  getMyOT() {
    this.driverService.getMyOT(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((myOT) => {
      this.ot = myOT;
      console.log(this.otDetails);
    });
  }

  buttonDisabled: boolean;

  disableBtn(){
    if (this.ot.approval == true)
      return this.buttonDisabled = true;
    else
      return this.buttonDisabled = false;
  }

}

