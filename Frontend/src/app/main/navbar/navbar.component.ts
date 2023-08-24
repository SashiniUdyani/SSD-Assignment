import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../_service/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }
}
