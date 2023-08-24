import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-nav-applicant',
  templateUrl: './nav-applicant.component.html',
  styleUrls: ['./nav-applicant.component.css']
})
export class NavApplicantComponent implements OnInit {

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
