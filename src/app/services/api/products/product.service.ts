import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = 'https://fakestoreapi.com/' ;

  constructor(private http:HttpClient) { 

  }

  getProductsWithLimit(limit : number=5) : Observable<any>{
    const productUrl : string = `${this.baseUrl}products?limit=+${limit}`
    return this.http.get<product[]>(productUrl);
  }
}
