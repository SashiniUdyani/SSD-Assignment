import {Component, OnInit} from '@angular/core';
import {LoginService} from "../_service/login.service";
import {Router} from "@angular/router";
import {NavbarService} from "../_service/navbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };
  logged = true;

  constructor(private loginService: LoginService, private navBarService: NavbarService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.accLogin(this.user).subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      if (user !== null && user['accountType'] === 'TM') {
        this.router.navigate(['/main/item_delivery'])
      } else if (user['accountType'] === 'VDM') {
        this.router.navigate(['/main/vehicle']);
      } else if (user['accountType'] === 'SO') {
        this.router.navigate(['/main/view_approved_trip_details'])
      } else if (user['accountType'] === 'DR') {
        this.router.navigate(['/main/driver_account'])
      } else if (user['accountType'] === 'GM') {
        this.router.navigate(['/main/create_user_account'])
      } else if (user['accountType'] === 'AP') {
        this.router.navigate(['/main/available_transports'])
      } else if (user['accountType'] === 'VMC') {
        this.router.navigate(['/main/vehicle_accident'])
      } else if (user['accountType'] === 'BMC') {
        this.router.navigate(['/main/shift'])
      } else {
        this.logged = false;
      }
    }, (err) => {
      this.logged = false;
    })
  }
}
