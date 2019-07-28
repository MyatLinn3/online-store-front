import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


      private user: User = new User();
      private updateSuccess: boolean;
      private newPassword: string;
      private incorrectPassword: boolean;
      private currentPassword: string;
      usernameExists: any;
      constructor(private userService:UserService) { }

      ngOnInit() {
      }


      onUpdateUserInfo () {

        this.userService.updateUserInfo(this.user).subscribe(
          res =>
          {console.log(res)
            this.user =new User();
          },
            error => console.log(error)
        )
      }




}
