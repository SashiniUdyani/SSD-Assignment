import {Component, OnInit} from '@angular/core';
import {GeneralManagerService} from "../../../../_service/general-manager.service";
import {Router} from "@angular/router";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-transport-report',
  templateUrl: './transport-report.component.html',
  styleUrls: ['./transport-report.component.css']
})
export class TransportReportComponent implements OnInit {


  transportDetails = [];
  weekValue = 1;

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  // deliveryItemDetails = [];
  // deliveryItem = {
  //   deliveryItemDetails: []
  // };

  user: boolean = true;
  item: boolean = true;
  tblIndex;

  applicationID;
  selectedTransport;

  constructor(private generalManagerService: GeneralManagerService, private router: Router) {

  }

  // ngOnInit(): void {
  // }


  ngOnInit(): void {
    this.getTransportApplicationforReport();
  }

  // setItem(deliveryItem, i) {
  //   this.tblIndex = i;
  //   this.deliveryItem = deliveryItem;
  //   this.isTrueOrFalse(true);
  // }


  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getTransports() {
    this.generalManagerService.getTransportApplication().subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // if(this.deliveryItemDetails.applicationID)
      console.log(this.transportDetails)
    })
  }


  getTransportByID() {
    this.generalManagerService.getTransportByID(this.applicationID).subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // console.log(this.vehicles)
    })
  }

  //get all transports
  getAllTransportRequests() {
    this.generalManagerService.getTransportApplication().subscribe((transportDetails) => {
      this.transportDetails = transportDetails;
      // console.log(this.vehicles)
    })
  }

  getTransportApplicationforReport() {
    this.generalManagerService.getTransportApplicationforReport().subscribe((transportDetails) => {

      // console.log(transportDetails)
      for (let transport of transportDetails) {
        if (transport.token != null) {
          this.transportDetails.push(transport)
        }
      }

    })
  }


  sendToPdf() {
    let data = document.getElementById("pdf");
    // let data = document.getElementById("maindiv");
    // console.log(data);
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg', 2.0)
      console.log(contentDataURL);
      let pdf = new jsPDF('l', 'cm', 'a3'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 2, 5, 40, 15);
      pdf.save('Filename.pdf');
    });
  }


  // getTimeDiff() {
  //   let date1 = new Time("06/30/2019");
  //   let date2 = new Date("07/30/2019");
  //   let time = date2.getTime() - date1.getTime();
  //   return time;
  // }


  getDataDiff(startDate, endDate) {
    let diff = new Date(endDate).getTime() - new Date(startDate).getTime();
    // console.log(diff)
    let days = Math.floor(diff / (60 * 60 * 24 * 1000));
    let hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    let minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    // var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return hours + 'h ' + minutes + 'm';
  }


}
