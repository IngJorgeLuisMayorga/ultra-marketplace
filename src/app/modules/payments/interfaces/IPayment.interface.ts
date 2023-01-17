export interface IPaymentService {

  id: number;
  address: string;

  submitPayment(number: number): string;
  getPaymentInfo(number: number): string;

}
