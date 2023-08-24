import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-nav-transport-manager',
  templateUrl: './nav-transport-manager.component.html',
  styleUrls: ['./nav-transport-manager.component.css']
})
export class NavTransportManagerComponent implements OnInit {

  constructor(private navBarService: NavbarService) { }

  ngOnInit(): void {

  }

  setTopic(topic){
    this.navBarService.navTopic.next(topic);
  }

  // setUsername(username){
  //   this.navBarService.username.next(username);
  // }
}
