import {Component, OnInit} from '@angular/core';
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-arrival-departure-log-page',
  templateUrl: './arrival-departure-log-page.component.html',
  styleUrls: ['./arrival-departure-log-page.component.css']
})
export class ArrivalDepartureLogPageComponent implements OnInit {

  booking;
  tokens = [];
  tokenDetail = {
    tokenID: '',
    departureDate: '',
    departureTime: '',
    departureDateTime: '',
    arrivalDate: '',
    arrivalTime: '',
    arrivalDateTime: '',
    transportStatus: '',
    booking: {
      bookingId: ''
    },
    securityOfficer: {
      securityOfficerID: ''
    },
    tokenDetails: []
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  tokenIdSearch;

  constructor(private securityOfficerService: SecurityOfficerService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }

  ngOnInit(): void {
    this.getAllTokens();
  }

  goToMeter(tokenDetail) {
    this.securityOfficerService.tokenDetail = tokenDetail;
    this.router.navigate(['/main/add_meter_detail'])
  }

  goToUpdate(tokenDetail) {
    this.securityOfficerService.tokenDetail = tokenDetail;
    this.router.navigate(['/main/update_details'])
  }

  removeToken(tokenID, tblIndex) {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to remove this token?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.securityOfficerService.deleteToken(tokenID).subscribe((reply) => {
          if (reply) {
            this.tokens.splice(tblIndex, 1);
            this.notifierService.notify("success", "Token deleted successfully");
          }
        })
      }
      this.alertBox.alert = false;
    })
  }

  getAllTokens() {
    this.securityOfficerService.getAllTokens().subscribe((tokens) => {
      this.tokens = tokens;
      console.log(this.tokens)
    })
  }

  getTokenByID() {
    this.securityOfficerService.getTokenByID(this.tokenIdSearch).subscribe((tokens) => {
      this.tokens = tokens;
    })
  }

}
