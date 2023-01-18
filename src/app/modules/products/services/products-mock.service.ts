import { Injectable } from '@angular/core';
import { map, Observable, of, timer } from 'rxjs';
import { IProductsAPI } from '../interfaces/IProductAPI.interace';
import { IProductHTTP } from '../interfaces/IProductHTTP.interface';
import productsMock from '../mocks/products.mock';


@Injectable({
  providedIn: 'root'
})
export class ProductsMockService implements IProductsAPI {

  constructor() { }

  getProducts(): Observable<IProductHTTP[]>{
      const MOCK_TIME = this.getRandomSleepTime(); // miliseconds
      return timer(MOCK_TIME).pipe(map((i) => productsMock))
  }

  getRandomSleepTime(){
    return Math.floor(Math.random() * (5000 - 500) + 500);
  }


}
