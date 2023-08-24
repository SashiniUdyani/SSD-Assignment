import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {DriverService} from "../../../../_service/driver.service";
import {Router} from "@angular/router";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-ot-report',
  templateUrl: './ot-report.component.html',
  styleUrls: ['./ot-report.component.css']
})
export class OtReportComponent implements OnInit {
  driver = {
    driverID: '',
    userAccount: {
      employeeID: '',
      name: '',
    },
  };
  driverDetails: [];

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
  currentYear: number = new Date().getFullYear();

  date
  n
  myFunction() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = 'March';
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    this.date = new Date();
    this.n = month[this.date.getMonth()];
    document.getElementById("demo").innerHTML = this.n;
  }

  Ctrl($scope)
  {
    $scope.date = new Date();
  }

  constructor(private driverService: DriverService,private router: Router, private datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.getDriver();
    this.getAllLastOverTimesbyDriverID();
  }

  getDriver() {
    this.driverService.getDriver(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((driver) => {
      this.driver = driver;
      console.log(this.driverDetails);
    });
  }

  getAllLastOverTimesbyDriverID() {
    this.driverService.getAllLastOverTimesbyDriverID(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((ot) => {
      this.otDetails = ot;
    });
  }

  sendToPdf(){
    let data = document.getElementById("pdf");
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg', 2.0)
      console.log(contentDataURL);
      let pdf = new jsPDF('l', 'cm', 'a3'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 3, 3, 0, 0);
      pdf.save('Filename.pdf');
    });
  }

}
