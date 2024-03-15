import { Component, Input, OnInit } from '@angular/core';
import { product } from '../services/api/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { 

  }
  ngOnInit(): void {
    
  }

  @Input()
  products : product={};

  

}
