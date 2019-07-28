import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn:boolean=true;
  constructor(private loginService:LoginService) { }

  ngOnInit() {

    // console.log("get Navbar before check session")
    // this.loginService.checkSession().subscribe(
    //     res => { this.loggedIn =true},
    //
    //     err => { this.loggedIn=false}
    // );
  }

  logout() {

  }
}
