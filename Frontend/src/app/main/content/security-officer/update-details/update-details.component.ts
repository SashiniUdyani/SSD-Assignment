import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  @ViewChild('tokenForm', {static: true}) public tokenForm: NgForm;

  tokenDetail = {
    tokenID: '',
    departureDate: '',
    departureTime: '',
    departureDateTime: '',
    departureTimeActual: '',
    arrivalDate: '',
    arrivalTime: '',
    arrivalDateTime: '',
    arrivalTimeActual: '',
    transportStatus: '',
    tokens: []
  };

  meterDetail = {
    meterId: '',
    outMeter: 0,
    inMeter: 0,
    mileage: 0,
    meters: []
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  btnTextToken = 'Update Token';
  btnTextMeter = 'Update Meter Details'
  meter: any;
  token;

  constructor(private securityOfficerService: SecurityOfficerService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }

  ngOnInit(): void {
    this.tokenDetail = this.securityOfficerService.tokenDetail;
    this.meterDetail = this.securityOfficerService.tokenDetail.meterDetail;
    this.chkMeter();
  }

  addMeterDetail() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update this meter details?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.securityOfficerService.updateMeterDetail(this.meterDetail).subscribe((meterDetail) => {
          if (this.btnTextMeter === 'Update Meter Details' && meterDetail.inMeter > meterDetail.outMeter)
            this.notifierService.notify("success", "Meter Detail updated successfully");
          if (meterDetail.inMeter <= meterDetail.outMeter)
            this.notifierService.notify("error", "Check the InMeter Value");
        })
      }
      this.alertBox.alert = false;
    })
  }


  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update this token details?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.tokenDetail.departureDateTime = this.tokenDetail.departureDate + 'T' + this.tokenDetail.departureTimeActual;
        this.tokenDetail.arrivalDateTime = this.tokenDetail.arrivalDate + 'T' + this.tokenDetail.arrivalTimeActual;
        this.securityOfficerService.updateToken(this.tokenDetail).subscribe((tokenDetail) => {
          if (this.btnTextToken === 'Update Token' && tokenDetail.transportStatus === true) {
            if (this.meterDetail.inMeter > this.meterDetail.outMeter) {
              this.notifierService.notify("success", "Token updated successfully");
              this.router.navigate(['/main/completed_trips'])
            } else
              this.notifierService.notify("error", "Check the InMeter Value");
          } else
            this.notifierService.notify("error", "Token Cannot be Updated!! Please check the transport status");
        })
      }
      this.alertBox.alert = false;
    })
  }

  chkMeter() {
    if (this.meterDetail.inMeter > this.meterDetail.outMeter) {
      this.meterDetail.mileage = this.meterDetail.inMeter - this.meterDetail.outMeter
    }
    else
      this.meterDetail.mileage = 0;
  }

  getMinDate() {
    return this.securityOfficerService.getCurDate();
  }
}
