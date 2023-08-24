import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import {Router} from "@angular/router";
import jspdf from 'jspdf'
import html2canvas from "html2canvas";

@Component({
  selector: 'app-vip-report',
  templateUrl: './vip-report.component.html',
  styleUrls: ['./vip-report.component.css']
})
export class VipReportComponent implements OnInit {


  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };
  @ViewChild('vipmemberForm', {static: true}) public vipmemberForm: NgForm;
  vipmembers = [];
  vipmemberDetail = {

    vipMemberId: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    position: ''


  };

  vipMemberNo;
  vipmember;
  // vipMemberId;
  // vipmember:any;

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllVipMembers();
  }

  setVipMember(vipmember) {
    this.vipmember = vipmember;
    this.isTrueOrFalse(true);
  }
  goToUpdate(vipmember) {
    this.vehicleDriverManagerService.vipmember = vipmember;
    this.router.navigate(['/main/update_vipmember'])
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllVipMembers() {
    this.vehicleDriverManagerService.getAllVipMembers().subscribe((vipmembers) => {
      this.vipmembers = vipmembers;
      // console.log(this.vipmember)
    })
  }

  // getVipMemberByNumber() {
  //   this.vehicleDriverManagerService.getVehicleByNumber(this.vehicleNumber).subscribe((vehicles) => {
  //     this.vipmembers = vipmembers;
  //     // console.log(this.vehicles)
  //   })


  getVipMemberByNumber() {
    this.vehicleDriverManagerService.getVipMemberByNumber(this.vipMemberNo).subscribe((vipmembers) => {
      this.vipmembers = vipmembers;
      console.log(this.vipmembers)
    })
  }


  download() {
    var element=document.getElementById('table')

    html2canvas(element).then((canvas)=>{

      var imageData=canvas.toDataURL('image/png')
      // var doc: module
      var doc = new jspdf();

      var imgHeight=canvas.height*208/canvas.width

      doc.addImage(imageData,0,0,208,imgHeight)
      doc.save("image.pdf")

    })

  }

}
