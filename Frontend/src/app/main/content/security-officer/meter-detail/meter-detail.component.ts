import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-meter-detail',
  templateUrl: './meter-detail.component.html',
  styleUrls: ['./meter-detail.component.css']
})
export class MeterDetailComponent implements OnInit {

  @ViewChild('meterForm', {static: true}) public meterForm: NgForm;
  token;
  meters = [];
  meterDetail = {
    meterId: '',
    outMeter: 0,
    inMeter: 0,
    mileage: 0,
    token: {
      tokenID: ''
    },
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  meter: any;

  constructor(private securityOfficerService: SecurityOfficerService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.token = this.securityOfficerService.tokenDetail;
  }

  addMeterDetail() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this meter detail?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.meterDetail.token = this.token;
        this.securityOfficerService.addMeterDetail(this.meterDetail).subscribe((meter) => {
          this.meters.push(meter);
          this.notifierService.notify("success", "Meter Detail added successfully");
          this.newMeter();
          this.router.navigate(['/main/arrival_departure_page'])
        }, (err) => {
          this.notifierService.notify("error", "Meter Detail cannot be added!!");
        })
      }
      this.alertBox.alert = false;
    })
  }

  newMeter() {
    this.meterDetail = {
      meterId: '',
      outMeter: 0,
      inMeter: 0,
      mileage: 0,
      token: {
        tokenID: ''
      },
    }
  };

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);
  }

}
