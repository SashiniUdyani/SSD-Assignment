import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  @ViewChild('tokenForm', {static: true}) public tokenForm: NgForm;
  booking;
  tokens = [];
  tokenDetail = {
    tokenID: '',
    departureDate: '',
    departureTime: '',
    departureDateTime: '',
    transportStatus: '',
    booking: {
      bookingId: ''
    },
    securityOfficer: {
      securityOfficerID: ''
    },
  };

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  token;
  setDepartureDate;

  constructor(private securityOfficerService: SecurityOfficerService,
              private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService) {
  }

  ngOnInit(): void {
    this.getAllTokens();
    this.booking = this.securityOfficerService.booking;
    this.setDepartureDate = this.securityOfficerService.getCurDate();
  }


  // onSubmit() {
  //   this.tokenDetail.booking = this.booking;
  //   this.tokenDetail.securityOfficer.securityOfficerID = this.getUser()['employeeID']
  //   this.tokenDetail.departureDateTime = this.tokenDetail.departureDate + 'T' + this.tokenDetail.departureTime;
  //   //console.log(this.tokenDetail)
  //   this.securityOfficerService.addToken(this.tokenDetail).subscribe((token) => {
  //     this.tokens.push(token);
  //     this.newToken()
  //     this.router.navigate(['/main/arrival_departure_page'])
  //   })
  // }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this token?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.tokenDetail.booking = this.booking;
        this.tokenDetail.securityOfficer.securityOfficerID = this.getUser()['employeeID']
        this.tokenDetail.departureDateTime = this.setDepartureDate + 'T' + this.tokenDetail.departureTime;
        this.securityOfficerService.addToken(this.tokenDetail).subscribe((token) => {
            this.tokens.push(token);
            this.notifierService.notify("success", "Token added successfully");
            this.newToken()
            this.router.navigate(['/main/arrival_departure_page'])
        }, (err) => {
            this.notifierService.notify("error", "Token cannot be added!!");
        })
      }
      this.alertBox.alert = false;
    })
  }

  newToken() {
    this.tokenDetail = {
      tokenID: '',
      departureDate: '',
      departureTime: '',
      departureDateTime: '',
      transportStatus: '',
      booking: {
        bookingId: ''
      },
      securityOfficer: {
        securityOfficerID: ''
      }
    }
  };

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  goToMeter(tokenDetail) {
    this.securityOfficerService.token = tokenDetail;
    this.router.navigate(['/main/add_meter_detail'])
  }

  getAllTokens() {
    this.securityOfficerService.getAllTokens().subscribe((tokens) => {
      this.tokens = tokens;
    })
  }

}
