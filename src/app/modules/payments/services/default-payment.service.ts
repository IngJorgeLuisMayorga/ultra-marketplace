import { Injectable } from '@angular/core';
import { IPaymentService } from '../interfaces/IPayment.interface';

@Injectable({
  providedIn: 'root'
})
export class DefaultPaymentService implements IPaymentService{

  constructor() { }

  public id: number = 0;
  public address: string = '';

  public submitPayment(number: number): string{
    return '';
  };
  public getPaymentInfo(number: number): string{
    return ''
  }
}
