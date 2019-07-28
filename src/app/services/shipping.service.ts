import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShippingAddress} from '../models/shipping-address-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  shippingAddress:ShippingAddress=new ShippingAddress();
  constructor(private  httpClient:HttpClient) { }


  createAddress(shippingAddress){
    console.log(shippingAddress);
    this.shippingAddress = shippingAddress;
  }

  getShipping(){
     return this.shippingAddress;
  }
}
