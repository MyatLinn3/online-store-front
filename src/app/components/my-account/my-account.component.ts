import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../constants/app-constant';
import {LoginService} from '../../services/login.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  currentJustify = 'start';

  private serverPath = AppConstant.serverPath;
  private loginError:boolean = false;
  private loggedIn = false;
  private credential = {'username':'', 'password':''};

  private emailSent: boolean =false;
  private usernameExists:boolean;
  private emailExists:boolean;
  private username:string;
  private email:string;

  private emailNotExists: boolean =false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail:string;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  onLogin() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      (res:any) => {
        console.log(res);
        localStorage.setItem("xAuthToken", res.token);
        this.loggedIn = true;
        // location.reload();
        this.router.navigate(['/home']);
      },
      error => {
        this.loggedIn = false;
        this.loginError = true;
      }
    );
  }

  onNewAccount() {
    this.usernameExists = false;
    this.emailExists = false;
    this.emailSent = false;

    this.userService.newUser(this.username, this.email).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      },
      error => {
        console.log(error);
        let errorMessage = error
        if(errorMessage==="usernameExists") this.usernameExists=true;
        if(errorMessage==="emailExists") this.emailExists=true;
      }
    );
  }

  onForgetPassword() {
    this.forgetPasswordEmailSent = false;
    this.emailNotExists = false;

    this.userService.retrievePassword(this.recoverEmail).subscribe(
      res => {
        console.log(res);
        this.forgetPasswordEmailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage = error.text();
        if(errorMessage==="Email sent!") this.emailExists=true;
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }
}
