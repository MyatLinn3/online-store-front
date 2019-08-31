import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product-model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: Product[] = [];
  keyword: string;

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getProductList().subscribe(
      data => {
        console.log(data);
        this.productList = data.filter(a => a.available === true);
        console.log(this.productList);
      },
      error => console.log(error)
    );
  }

  getDetailProduct(product) {
    this.router.navigate(['/productDetail', product.id]);
  }


  onSearchByTitle() {
    this.productService.searchProduct(this.keyword).subscribe(
      res => {
        this.productList = res
      },
      error => console.log(error)
    )
  }
}
