import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: number;
  product: Product = new Product();
  quantity: number;

  constructor(private service: ProductService, private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.productId = parseInt(param.get('id'))
    });
    this.service.getProduct(this.productId).subscribe((data: Product) => {
      this.product = data;
      this.quantity = this.product.availableQuantity;
    });
  }

  addToCart(book: any) {
    this.quantity -= 1;
    this.cartService.addToCart(book);
  }

  public getCarts() {
    return this.cartService.getCarts();
  }

}
