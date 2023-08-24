import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-view-shift',
  templateUrl: './view-shift.component.html',
  styleUrls: ['./view-shift.component.css']
})
export class ViewShiftComponent implements OnInit {
  @ViewChild('shiftForm', {static: true}) public shiftForm: NgForm;
  shifts = [];
  shift = {
    shiftId: '',
    shiftDate: '',
    startingTime: '',
    endingTime: '',
    attendance: '',
    driverVehicle: {
      driverVehicleID: {
        driverID: '',
        vehicleId: ''
      }
    },
    bookingManagementClerk: {
      bookingManagementClerkId: ''
    }
  };

  selectedShift;

  driverId;
  vehicleType;

  constructor(private bookingManagerService: BookingManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllShifts();
  }

  selectShift(shift) {
    this.selectedShift = shift;
  }

  goToUpdate(shift) {
    this.bookingManagerService.shift = shift;
    this.router.navigate(['/main/update_shift'])
  }

  getAllShifts() {
    this.bookingManagerService.getAllShifts().subscribe((shifts) => {
      this.shifts = shifts;
      console.log(shifts)
    })
  }


  getAllShiftsByDriver() {
    this.bookingManagerService.getAllShiftsByDriver(this.driverId).subscribe((shifts) => {
      this.shifts = shifts;
    })
  }

  getAllShiftsByVehicle() {
    this.bookingManagerService.getAllShiftsByVehicle(this.vehicleType).subscribe((shifts) => {
      this.shifts = shifts;
    })
  }

  goToApplicationBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/booking_application'])
  }

  goToSpecialBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/special_booking'])
  }

  goToVipBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/vip_booking'])
  }

  goToProgramBooking() {
    this.bookingManagerService.shift = this.selectedShift;
    this.router.navigate(['/main/program_booking'])
  }
}
