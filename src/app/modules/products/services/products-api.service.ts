import { Injectable } from '@angular/core';
import { IProductsAPI } from '../interfaces/IProductAPI.interace';
import { IProductHTTP } from '../interfaces/IProductHTTP.interface';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService implements IProductsAPI {

  constructor() { }

  getProducts(): Promise<IProductHTTP[]>{
    return new Promise((resolve => resolve([])));
  }

  getProductById(){}

}
