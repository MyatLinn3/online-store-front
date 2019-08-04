import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product-model';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList:Product[]=[];
  keyword: string;

  constructor(private productService:ProductService,
              private router:Router) { }

  ngOnInit() {
    this.getAllProduct();
    console.log(this.productList)
  }

  getAllProduct(){
     this.productService.getProductList().subscribe(
        data => this.productList =data,
       error => console.log(error)
     )
  }

  getDetailProduct(product){
      this.router.navigate(['/productDetail',product.id]);
  }


  onSearchByTitle() {
     this.productService.searchProduct(this.keyword).subscribe(
       res =>  {
          this.productList = res
       },
       error1 => console.log(error1)
     )
  }
}
