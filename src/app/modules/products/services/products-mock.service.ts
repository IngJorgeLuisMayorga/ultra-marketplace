import { Injectable } from '@angular/core';
import { IProductsAPI } from '../interfaces/IProductAPI.interace';
import { IProductHTTP } from '../interfaces/IProductHTTP.interface';
import productsMock from '../mocks/products.mock';


@Injectable({
  providedIn: 'root'
})
export class ProductsMockService implements IProductsAPI {

  constructor() { }

  getProducts(): Promise<IProductHTTP[]>{
    return new Promise((resolve => {
      const MOCK_TIME = this.getRandomSleepTime(); // miliseconds
      setTimeout(() => {
        resolve(productsMock)
      }, MOCK_TIME)
    }));
  }

  getRandomSleepTime(){
    return Math.floor(Math.random() * (10000 - 1000) + 1000);
  }


}
