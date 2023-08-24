import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertBoxService} from "../../../../alert-box/alert-box.service";

@Component({
  selector: 'app-vipmember',
  templateUrl: './vipmember.component.html',
  styleUrls: ['./vipmember.component.css']
})
export class VipmemberComponent implements OnInit {

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
    this.vipmember = this.getNewVipmember();
  }

  ngOnInit(): void {
  }

  OnSubmitVipmember() {
    this.alertBox.alert = true;
    this.alertBox.msg = 'Do you want to add this VIP Member?';
    this.alertService.reply.observers = [];
    this.alertService.reply.subscribe(reply => {
      if (reply) {
    // console.log(this.vipmemberDetail)
    this.vehicleDriverManagerService.addVipmember(this.vipmemberDetail).subscribe((vipmember) => {
      this.setNewForm();
      this.notifierService.notify("success", "VIP Member Detail added successfully");
      // this.router.navigate(['/main/view_vipmembers'])
    }, (err) => {
      this.notifierService.notify("error", "VIP Member failed");
    })
      }
      this.alertBox.alert = false;

    })
  }
  setNewForm() {
    this.vipmemberForm.resetForm();
  }

  getNewVipmember() {
    return {
      vipMemberId:'',
      firstName:'',
      lastName:'',
      contactNumber:'',
      address:'',
      position:''
    };
  }










}
