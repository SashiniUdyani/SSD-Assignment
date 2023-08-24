import {Component, OnInit} from '@angular/core';
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-vip-booking',
  templateUrl: './view-vip-booking.component.html',
  styleUrls: ['./view-vip-booking.component.css']
})
export class ViewVipBookingComponent implements OnInit {


  vipBookings = [];
  bookingId;
  bookingManagementClerkId;
  vipBookingId;


  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllVipBooking();
  }

  goToUpdate(vipBooking) {
    this.bookingManagerService.vipBooking = vipBooking;
    this.router.navigate(['/main/update_vip_booking'])
  }

  getAllVipBooking() {
    this.bookingManagerService.getAllVipBooking().subscribe((vipBookings) => {
      this.vipBookings = vipBookings;
      // console.log(specialBooking)
    })
  }

  getVipBookingByVipBookingId() {
    this.bookingManagerService.getVipBookingByVipBookingId(this.vipBookingId).subscribe((vipBookings) => {
      this.vipBookings = vipBookings;
      console.log(vipBookings)

    })
  }


}
