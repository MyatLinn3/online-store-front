import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../constants/app-constant';
import {LoginService} from '../../services/login.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserPayment} from '../../models/user-payment';
import {UserBilling} from '../../models/user-billing';
import {PaymentService} from '../../services/payment.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public user:User =new User();
  userId:number = 1;
  constructor(private  userService:UserService,
              private router:Router,
              private route:ActivatedRoute){}
  ngOnInit() {

    this.route.params.subscribe((params:Params)=>{
        this.userId = params.get['id'];
    })

     this.userService.getCurrentUser(this.userId).subscribe(
       (data:any) => this.user=data
     )
    console.log(this.user.username)
  }


  editProfile() {
     this.router.navigate(['/editProfile',this.userId]);

  }
}
