import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { product } from '../services/api/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products : product[]=[];

  constructor(private productService : ProductService) { 

  }

  ngOnInit(): void {
    this.productService.getProductsWithLimit()
    .subscribe({
      next : data => {
          this.products=data;
      },
    });
  }

}
