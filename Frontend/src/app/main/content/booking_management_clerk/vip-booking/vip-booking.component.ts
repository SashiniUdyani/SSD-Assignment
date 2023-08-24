import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookingManagerService} from "../../../../_service/booking-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";
import {CommonService} from "../../../../_service/common.service";

@Component({
  selector: 'app-vip-booking',
  templateUrl: './vip-booking.component.html',
  styleUrls: ['./vip-booking.component.css']
})
export class VipBookingComponent implements OnInit {


  @ViewChild('vipBookingForm', {static: true}) public vipBookingForm: NgForm;
  vipMembers = [];

  vipBooking = {
    booking: {
      bookingId: '1',
      bookingDateTime: '',
      destination: '',
      bookingStatus: true,
      bookingManagementClerk: {
        bookingManagementClerkId: 'BMC123'
      },
      shift: {
        shiftId: '',
      }
    },
    purpose: '',
    timePeriod: '',
    approvedFuelAmount: '',
    approval: true,
    vipMember: {
      vipMemberId: '',
    }
  };

  vipMemberId;
  selected = ""
  shift;

  update(e) {
    this.selected = e.target.value
  }

  selectVipMember(vipMember) {
    this.vipBooking.vipMember.vipMemberId = vipMember.vipMemberId;
  }

  constructor(private bookingManagerService: BookingManagerService, private router: Router,
              private notifierService: NotifierService,
              private alertService: AlertBoxService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.shift = this.bookingManagerService.shift;
    this.getAllVipMembers();
  }

  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  setNewForm() {
    this.vipBookingForm.resetForm();
  }

  getAllVipMembers() {
    this.bookingManagerService.getAllVipMembers().subscribe((vipmembers) => {
      this.vipMembers = vipmembers;
      // console.log(this.vipmember)
    })
  }

  getVipMember() {
    this.bookingManagerService.getVipMember(this.vipMemberId).subscribe((vipMembers) => {
      this.vipMembers = vipMembers;
      console.log(this.vipMembers)
    })
  }

  onSubmit() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this VIP booking?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
        this.vipBooking.booking.shift.shiftId = this.shift.shiftId;
        this.vipBooking.booking.bookingManagementClerk.bookingManagementClerkId = JSON.parse(localStorage.getItem('user'))['employeeID'];

        this.bookingManagerService.addVipBooking(this.vipBooking).subscribe(() => {
          this.setNewForm();
          this.notifierService.notify("success", "VIP Booking added successfully");


          // this.router.navigate(['/main/view_vip_booking'])
        }, (err) => {
          this.notifierService.notify("error", "VIP booking failed");
        })
      }
      this.alertBox.alert = false;
    })
  }

  getMinDate() {
    return this.bookingManagerService.getCurDate() + 'T00:00';
  }

  getMinimumDate() {
    return this.bookingManagerService.getCurDate();
  }

  setNumberPositive(val) {
    return this.commonService.setNumberPositive(val);
  }
}



