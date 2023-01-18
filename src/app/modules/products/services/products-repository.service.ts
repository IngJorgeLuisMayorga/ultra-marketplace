import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductsAPI } from '../interfaces/IProductAPI.interace';
import { IProductsRepository } from '../interfaces/IProductsRepository.interface';
import { Product } from '../models/Product.model';
import { ProductsApiService } from './products-api.service';
import { ProductsMockService } from './products-mock.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService implements IProductsRepository{

  private $api: IProductsAPI;

  constructor(
    private mock: ProductsMockService,
    private server: ProductsApiService
  ) {

    if(environment.mock) {
      this.$api = this.mock;
    } else{
      this.$api = this.server;
    }

  }

  getAll(): Observable<Product[]>{
    return this.$api.getProducts().pipe(
      map(products => products.map(product => {
        return {
          ...product,
          available: true,
        }
      }) as Product[])
    )
  }

  getById(id: number): Promise<Product | null>{
    return new Promise((resolve => resolve(null)));
  }

  addById(id: number, payload: any): Promise<Product | null>{
    return new Promise((resolve => resolve(null)));
  }

  editById(id: number, payload: any): Promise<Product | null>{
    return new Promise((resolve => resolve(null)));
  }

  removeById(id: number, payload: any): Promise<Product | null>{
    return new Promise((resolve => resolve(null)));
  }


}
