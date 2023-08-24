import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-nav-vehicle-driver-manager',
  templateUrl: './nav-vehicle-driver-manager.component.html',
  styleUrls: ['./nav-vehicle-driver-manager.component.css']
})
export class NavVehicleDriverManagerComponent implements OnInit {

  constructor(private navBarService: NavbarService) { }

  ngOnInit(): void {
    // this.navBarService.navTopic.next('Vehicle');
  }

  setTopic(topic){
    this.navBarService.navTopic.next(topic);
  }

}
