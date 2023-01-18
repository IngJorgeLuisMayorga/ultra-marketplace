import { Injectable } from '@angular/core';
import { IProductsAPI } from '../interfaces/IProductAPI.interace';
import { IProductHTTP } from '../interfaces/IProductHTTP.interface';
import { Product } from '../models/Product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService implements IProductsAPI {

  constructor(private $http: HttpClient) { }

  async getProducts(): Promise<IProductHTTP[]>{
    const response = await this.$http.get<IProductHTTP[]>(`${environment}`).toPromise();
    if(response) return response;
    return [];
  }

  getProductById(){}

}
