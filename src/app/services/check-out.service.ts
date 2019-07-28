import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {OrderDto} from '../models/order-model-dto';
import {AppConstant} from '../constants/app-constant';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
  private serverPath=AppConstant.serverPath;
  constructor(private httpClient:HttpClient) { }

  createOrder(orderDTO: OrderDto):Observable<string> {
    console.log(orderDTO);
    let url = this.serverPath+"/api/order/create";

    let tokenHeader = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.httpClient.post<string>("http://localhost:8080/api/order/create", orderDTO);
  }

}
