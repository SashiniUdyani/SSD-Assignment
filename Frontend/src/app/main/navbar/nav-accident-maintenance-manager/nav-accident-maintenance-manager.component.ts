import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-nav-accident-maintenance-manager',
  templateUrl: './nav-accident-maintenance-manager.component.html',
  styleUrls: ['./nav-accident-maintenance-manager.component.css']
})
export class NavAccidentMaintenanceManagerComponent implements OnInit {

  constructor(private navBarService: NavbarService) { }

  ngOnInit(): void {
    // this.navBarService.navTopic.next('View Accidents');
  }

  setTopic(topic){
    this.navBarService.navTopic.next(topic);
  }
}
