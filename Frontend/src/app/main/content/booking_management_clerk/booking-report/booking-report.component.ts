import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-booking-report',
  templateUrl: './booking-report.component.html',
  styleUrls: ['./booking-report.component.css']
})
export class BookingReportComponent implements OnInit {
  booking = [];
  bookings: {
    bookingId: '',
    bookingDateTime: '',
    destination: '',
    bookingStatus: true,
    bookingManagementClerk: {
      bookingManagementClerkId: ''
    },
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBookings();
  }


  getAllBookings() {
    this.bookingManagerService.getAllBookings().subscribe((booking) => {
      this.booking = booking;
    })
  }

  downloadPdf() {
    let data = document.getElementById('pdf');
    html2canvas(data).then(canvas => {
      var contentDataURL = canvas.toDataURL('image/png')
      var pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
      pdf.addImage(contentDataURL, 'PNG', 1, 1, 0, 0);
      pdf.save('BookingReport.pdf');
    });
  }


}
