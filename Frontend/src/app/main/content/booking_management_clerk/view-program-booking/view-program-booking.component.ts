import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-program-booking',
  templateUrl: './view-program-booking.component.html',
  styleUrls: ['./view-program-booking.component.css']
})
export class ViewProgramBookingComponent implements OnInit {

  programBookings = [];

  bookingId;
  bookingManagementClerkId;
  programBookingId;


  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProgramBooking();
  }

  goToUpdate(programBooking) {
    this.bookingManagerService.programBooking = programBooking;
    this.router.navigate(['/main/update_program_booking'])
  }

  getAllProgramBooking() {
    this.bookingManagerService.getAllProgramBooking().subscribe((programBookings) => {
      this.programBookings = programBookings;
      // console.log(specialBooking)
    })
  }

  getProgramBookingByProgramBookingId() {
    this.bookingManagerService.getProgramBookingByProgramBookingId(this.programBookingId).subscribe((programBookings) => {
      this.programBookings = programBookings;
      console.log(programBookings)

    })
  }


}
