import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import {ApplicantService} from "../../../../_service/applicant.service";

@Component({
  selector: 'app-waiting-report',
  templateUrl: './waiting-report.component.html',
  styleUrls: ['./waiting-report.component.css']
})
export class WaitingReportComponent implements OnInit {

  passenger =
    {
      applicationID: '',
      arrivaleDate: '',
      depatureDate: "",
      reason: '',
      destination: '',
      contactNumber: '',
      drivername: '',
      vehicleId: '',
      approval: '',
      lisenseID: '',
      driveremployeeID: '',
      drivercontactNo: '',
      driveremail: '',
      type: "",
      BookedVehicleType: '',
      bookingApplicationId: '',
      model: '',
      noOfSeats: '',
      vehicleType: '',
      passengerApp: {
        noOfPassengers: '5',
        passengerApplicationID: '',
      },
      itemApp: {
        noOfItems: '',
        itemApplicationID: ''
      },
      passengerPassengerApplications: [],
      itemItemApplicationDTOS: []
    }

  waiting1 = [];
  waiting2 = [];


  constructor(private applicant: ApplicantService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBookings();
  }


  getAllBookings() {
    this.applicant.getwaiting().subscribe((booking) => {
      this.waiting1 = booking;
      // this.setArray()
    })
  }

  // setArray() {
  //
  //
  //   for(let x=0;x<=this.waiting1.length-1;x++)
  //   {
  //     let z2=this.waiting1[x]
  //     let z1=[]
  //     z1=z2.passengerApplication.passengerPassengerApplications
  //     console.log(z1)
  //     for(let y=0;y<=z1.length-1;y++){
  //       this.passenger=z1[y]
  //       this.passenger
  //     }
  //  console.log(this.passenger)
  //console.log(this.passenger.passengerPassengerApplications)
  // this.passenger.arrivaleDate = z1.depatureDateActual;
  // this.passenger.depatureDate = z1.arrivaleDateActual;
  // this.passenger.destination = z1.destination;
  // this.passenger.approval = z1.approval;
  // this.passenger.type=z1.type;
  // this.passenger.reason=z1.reason;
  // this.passenger.vehicleType=z1.vehicleType;
  // this.passenger.passengerApp.passengerApplicationID=z1.passengerApplication.passengerApplicationID


  // this.setNewPassenger();
  //   }
  //   //console.log(this.waiting2)
  // }


  downloadPdf() {
    let data = document.getElementById('pdf');  //Id of the table
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      let imgWidth = 310;
      // let pageHeight = 350;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('l', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight)
      pdf.save('Waiting.pdf'); // Generated PDF
    });
    // let data = document.getElementById('pdf');
    // html2canvas(data).then(canvas => {
    //   var contentDataURL = canvas.toDataURL('image/png')
    //   var pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
    //   pdf.addImage(contentDataURL, 'PNG', 1, 1, 0, 0);
    //   pdf.save('waiting.pdf');
    // });
  }

  getDataDiff(endDate) {
    let diff = new Date().getTime() - new Date(endDate).getTime();
    // console.log(diff)
    let days = Math.floor(diff / (60 * 60 * 24 * 1000));
    // let hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    // let minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    // var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    if (days < 0) {
      days = 0;
    }
    return days + 'days';
  }


}
