import {Component, OnInit} from '@angular/core';
import {SecurityOfficerService} from "../../../../_service/security-officer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-approved-trip-details',
  templateUrl: './view-approved-trip-details.component.html',
  styleUrls: ['./view-approved-trip-details.component.css']
})
export class ViewApprovedTripDetailsComponent implements OnInit {

  bookings = [];
  booking = {
    bookingId: '',
    bookingDateTime: '',
    destination: '',
    bookingStatus: false,
  };

  bookingDestination;

  constructor(private securityOfficerService: SecurityOfficerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBookings();
  }

  createToken(booking) {
    this.securityOfficerService.booking = booking;
    this.router.navigate(['/main/create_token']);
  }

  getAllBookings() {
    this.securityOfficerService.getAllBookings().subscribe((bookings) => {
      this.bookings = bookings;
      // console.log(this.bookings)
    })
  }

  getBookingByDestination() {
    this.securityOfficerService.getBookingByDestination(this.bookingDestination).subscribe((bookings) => {
      this.bookings = bookings;
    })
  }


}
