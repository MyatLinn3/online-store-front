import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstant} from '../constants/app-constant';
import {Observable} from 'rxjs';
import {Product} from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serverPath=AppConstant.serverPath;

  constructor(private httpClient:HttpClient) { }


  public getProductList():Observable<Product[]>{
    let url = this.serverPath+'/api/product/productList';
    let tokenHeader = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.httpClient.get<Product[]>(url,{headers:tokenHeader})
  }

  public  getProduct(id:number):Observable<Product>{
    let url = this.serverPath+'/api/product/'+id;
    let tokenHeader = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.httpClient.get<Product>(url,{headers:tokenHeader})
  }



}
