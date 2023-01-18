import { Injectable } from '@angular/core';
import { IProductsAPI } from '../interfaces/IProductAPI.interace';
import { IProductHTTP } from '../interfaces/IProductHTTP.interface';
import { Product } from '../models/Product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService implements IProductsAPI {

  constructor(private $http: HttpClient) { }

  getProducts(): Observable<IProductHTTP[]>{
    return this.$http.get<IProductHTTP[]>(`${environment}`);
  }

  getProductById(){}

}
