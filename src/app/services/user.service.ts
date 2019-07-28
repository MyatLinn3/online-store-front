import { Injectable } from '@angular/core';
import {AppConstant} from '../constants/app-constant';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
      private serverPath: string = AppConstant.serverPath;

      constructor(private http:HttpClient) { }

      newUser(username: string, email:string) {
        let url = this.serverPath+'/user/newUser';

        let userInfo = {
          "username" : username,
          "email" : email
        }

        let tokenHeader = new HttpHeaders({
          'Content-Type' : 'application/json',
          'x-auth-token' : localStorage.getItem('xAuthToken')
        });

        return this.http.post(url, JSON.stringify(userInfo),{headers:tokenHeader});

      }

      retrievePassword(email:string) {
        let url = this.serverPath+'/user/forgetPassword';
        let userInfo = {
          "email" : email
        }
        let tokenHeader = new HttpHeaders({
          'Content-Type' : 'application/json',
          'x-auth-token' : localStorage.getItem('xAuthToken')
        });

        return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
      }

      updateUserInfo(user:User) {
        let url = this.serverPath + "/api/user/update";
        let userInfo = {
          "id" : user.id,
          "firstName" : user.firstName,
          "lastName" : user.lastName,
          "username" : user.username,
          "email" : user.email,
          "password" :user.password,
          "enabled":true
        };

        let tokenHeader = new HttpHeaders({
          'Content-Type' : 'application/json',
        });
        return this.http.post(url, JSON.stringify(userInfo), {headers:tokenHeader});
      }


        getCurrentUser(userId) {
          let url = this.serverPath+'/api/user/' +userId;

          let tokenHeader = new HttpHeaders({
            'Content-Type' : 'application/json'
          });

          return this.http.get(url, {headers : tokenHeader});
        }


}
