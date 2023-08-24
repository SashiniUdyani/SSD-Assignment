import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-nav-general-manager',
  templateUrl: './nav-general-manager.component.html',
  styleUrls: ['./nav-general-manager.component.css']
})
export class NavGeneralManagerComponent implements OnInit {

  constructor(private navBarService: NavbarService) { }

  ngOnInit(): void {
  }

  setTopic(topic){
    this.navBarService.navTopic.next(topic);
  }

}
