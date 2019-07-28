import { Injectable } from '@angular/core';
import {Product} from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products:Product[]=[];

  constructor() { }

  public addToCart(book){
    // let test=true;
    // this.products.forEach( value => {
    //    if (value.id === book.id){
    //       test = false;
    //    }
    // })
    // if (test){
    //   this.products.push(book);
    // }
    this.products.push(book);
  }

  public  getCarts(){
    return this.products;
  }

  public  clearCart(){
    this.products = [];
  }
}
