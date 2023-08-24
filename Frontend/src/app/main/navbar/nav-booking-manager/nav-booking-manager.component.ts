import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-nav-booking-manager',
  templateUrl: './nav-booking-manager.component.html',
  styleUrls: ['./nav-booking-manager.component.css']
})
export class NavBookingManagerComponent implements OnInit {

  constructor(private navBarService: NavbarService) { }

  ngOnInit(): void {

  }

  setTopic(topic){
    this.navBarService.navTopic.next(topic);
  }

}
