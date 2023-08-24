import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-nav-security-officer',
  templateUrl: './nav-security-officer.component.html',
  styleUrls: ['./nav-security-officer.component.css']
})
export class NavSecurityOfficerComponent implements OnInit {

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
