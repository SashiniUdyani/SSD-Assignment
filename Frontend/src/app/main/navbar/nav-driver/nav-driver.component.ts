import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../_service/navbar.service";

@Component({
  selector: 'app-nav-driver',
  templateUrl: './nav-driver.component.html',
  styleUrls: ['./nav-driver.component.css']
})
export class NavDriverComponent implements OnInit {

  constructor(private navBarService: NavbarService) { }

  ngOnInit(): void {
  }

  setTopic(topic){
    this.navBarService.navTopic.next(topic);
  }
}
