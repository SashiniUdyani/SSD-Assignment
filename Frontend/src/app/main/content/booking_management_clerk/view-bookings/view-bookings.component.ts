import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {


  bookingApplications = [];
  driverVehicle: {
    driverVehicleID: {
      driverID: '',
      vehicleId: ''
    }
  }


  bookingId;
  bookingManagementClerkId;
  bookingApplicationId;


  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBookingApplication();
  }

  goToUpdate(bookingApplication) {
    this.bookingManagerService.bookingApplication = bookingApplication;
    this.router.navigate(['/main/update_booking_application'])
  }

  getAllBookingApplication() {
    this.bookingManagerService.getAllBookingApplication().subscribe((bookingApplications) => {
      this.bookingApplications = bookingApplications;
      // console.log(specialBooking)
    })
  }

  getBookingApplicationByBookingApplicationId() {
    this.bookingManagerService.getBookingApplicationByBookingApplicationId(this.bookingApplicationId).subscribe((bookingApplications) => {
      this.bookingApplications = bookingApplications;
      console.log(bookingApplications)

    })
  }


}
