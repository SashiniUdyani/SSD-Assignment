import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-update-vipmember',
  templateUrl: './update-vipmember.component.html',
  styleUrls: ['./update-vipmember.component.css']
})
export class UpdateVipmemberComponent implements OnInit {

  @ViewChild('vipmemberForm', {static: true}) public vipmemberForm: NgForm;
  vipmemberDetail = {

    vipMemberId:'',
    firstName:'',
    lastName:'',
    contactNumber:'',
    address:'',
    position:''


  };
  alertBox = {
    alert: false,
    msg: '',
    value: ''
  };

  vipmember:any;
  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router,private notifierService: NotifierService,
              private alertService: AlertBoxService) {
    // this.vipmember = this.getNewVipmember();
  }

  ngOnInit(): void {
    this.vipmemberDetail = this.vehicleDriverManagerService.vipmember;
  }
  OnSubmitVipmember() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to update VIP Member details?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    console.log(this.vipmemberDetail)
    this.vehicleDriverManagerService.updateVipMember(this.vipmemberDetail).subscribe((vipmember) => {
      this.vipmemberDetail = vipmember;
      this.notifierService.notify("success", "VIP Member details updated successfully");
      // this.router.navigate(['/main/view_vipmembers'])
    }, (err) => {
      this.notifierService.notify("error", "VIP Member details failed");
    })
      }
      this.alertBox.alert = false;
    })

  }
  removeVipMember() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to remove this VIP Member detail?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    this.vehicleDriverManagerService.deleteVipMember(this.vipmemberDetail.vipMemberId).subscribe((reply) => {
      if (reply) {
        this.router.navigate(['/main/view_vipmembers'])
      }
    })
      }
      this.alertBox.alert = false;
    })
  }


}
