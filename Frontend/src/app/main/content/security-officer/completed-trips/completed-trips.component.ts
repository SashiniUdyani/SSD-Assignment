import {Component, OnInit} from '@angular/core';
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";
import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-completed-trips',
  templateUrl: './completed-trips.component.html',
  styleUrls: ['./completed-trips.component.css']
})
export class CompletedTripsComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  bookings = [];
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
      bookingId: '',
      destination: ''
    },
    securityOfficer: {
      securityOfficerID: ''
    },
    tokenDetails: []
  };

  meterDetail = {
    meterId: '',
    outMeter: 0,
    inMeter: 0,
    mileage: 0,
    meters: []
  };

  bookingDestination;
  tokenIdSearch;
  driverID;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCompletedTokens();
  }

  setToken(tokenDetail) {
    this.meterDetail = tokenDetail.meterDetail;
    this.tokenDetail = tokenDetail;
    this.isTrueOrFalse(true);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getCompletedTokens() {
    this.securityOfficerService.getCompletedTokens().subscribe((tokens) => {
      this.tokens = tokens;
      console.log(this.tokens)
    })
  }

  getTokenByID() {
    this.securityOfficerService.getTokenByID(this.tokenIdSearch).subscribe((tokens) => {
      this.tokens = tokens;
    })
  }

  getTokenByDestination() {
    this.securityOfficerService.getTokenByDestination(this.bookingDestination).subscribe((tokens) => {
      this.tokens = tokens;
    })
  }

  getTokenByDriverID() {
    this.securityOfficerService.getTokenByDriverID(this.driverID).subscribe((tokens) => {
      this.tokens = tokens;
    })
  }

  downloadPdf() {
    var element = document.getElementById('SummaryReport')
    html2canvas(element).then((canvas) => {
      console.log(canvas)
      var imgData = canvas.toDataURL('image/png')
      var doc = new jsPDF();
      var imgHeight = canvas.height * 208 / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeight)
      doc.save("Report.pdf")
    })
  }
}
