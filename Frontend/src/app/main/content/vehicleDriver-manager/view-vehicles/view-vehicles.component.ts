import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VehicleDriverManagerService} from "../../../../_service/vehicle-driver-manager.service";
import jspdf from 'jspdf'
import html2canvas from "html2canvas";
// import * as module from "module";
import {image} from "html2canvas/dist/types/css/types/image";
@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {

  isModalTable = {
    text: '',
    openTable: false,
    foundItem: ''
  };

  vehicles = [];
  vehicle = {
    vehicleId: '',
    vehicleType: '',
    model: '',
    noOfSeats: '',
    initialMeter: '',
    serviceMeter: '',
    fuelBalance: '',
    fuelConsumption: '',
    occupied: '',
    fuelType: ''
  };

  vehicleNumber;
  private table: string;

  constructor(private vehicleDriverManagerService: VehicleDriverManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  setVehicle(vehicle) {
    this.vehicle = vehicle;
    this.isTrueOrFalse(true);
  }

  goToUpdate(vehicle) {
    this.vehicleDriverManagerService.vehicle = vehicle;
    this.router.navigate(['/main/update_vehicle'])
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getAllVehicles() {
    this.vehicleDriverManagerService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      // console.log(this.vehicles)
    })
  }

  getVehicleByNumber() {
    this.vehicleDriverManagerService.getVehicleByNumber(this.vehicleNumber).subscribe((vehicles) => {
      this.vehicles = vehicles;
      // console.log(this.vehicles)
    })
  }

  download() {
    var element=document.getElementById('abc')

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
