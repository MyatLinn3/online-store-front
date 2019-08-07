import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product-model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    products:Product[]=[];
    totalPrice: number =0;
    constructor(private  cartService:CartService) { }

    ngOnInit() {
      this.products = this.cartService.getCarts();
      this.products.forEach( value => {
         this.totalPrice += value.price;
      })
    }

    public  clearCart(){
      this.cartService.clearCart();
      this.totalPrice = 0;
      // this.products = this.cartService.getCarts()
    }

    public isCartExist(){
      return !(this.products.length > 0);
    }



}
