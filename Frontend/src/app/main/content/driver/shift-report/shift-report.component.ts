import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../../../_service/driver.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-shift-report',
  templateUrl: './shift-report.component.html',
  styleUrls: ['./shift-report.component.css']
})
export class ShiftReportComponent implements OnInit {

  driver = {
    driverID: '',
    userAccount: {
      employeeID: '',
      name: '',
    },
  };
  driverDetails: [];
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
    this.getAllShiftsbyDriverID();
  }

  getDriver() {
    this.driverService.getDriver(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((driver) => {
      this.driver = driver;
      console.log(this.driverDetails);
    });
  }

  shiftDetails = [];

  shift = {
    shiftId: '',
    attendance: '',
    endingTime: '',
    shiftDate: '',
    startingTime: '',
    driverID: ''
  };

  getAllShiftsbyDriverID() {
    this.driverService.getAllShiftsbyDriverID(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((myShift) => {
      this.shiftDetails = myShift;
    });
  }

  sendToPdf(){
    let data = document.getElementById("pdf");
    // let data = document.getElementById("maindiv");
    // console.log(data);
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
