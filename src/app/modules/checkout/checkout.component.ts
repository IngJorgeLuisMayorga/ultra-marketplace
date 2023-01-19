import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  AddProductToCart,
  FetchProducts,
  SubmitPayment,
} from 'src/app/store/marketplace.actions';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { ICheckout } from './models/ICheckout.model';

const regexNames = "^([ \u00c0-\u01ffa-zA-Z'-])+$";
const regexCity = "^([ \u00c0-\u01ffa-zA-Z'-])+$";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Select(MarketplaceState.getCartTotal) total$!: Observable<number>;

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(regexNames),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(regexNames),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern(regexCity),
      Validators.minLength(2),
    ]),
    state: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public paymentSuccesfull = false;

  constructor(private store: Store, private router: Router) {}

  async ngOnInit() {
    //Check if Store has products
    this.validateRoute();
  }



  validateRoute() {
    const total = this.store.selectSnapshot(MarketplaceState.getCartTotal);
    const balance = this.store.selectSnapshot(MarketplaceState.getBalance);
    const products = this.store.selectSnapshot(
      MarketplaceState.getProductsInCart,
    );

    const hasCartProducts = products.length > 0;
    const hasCartTotal = total > 0;
    const hasBalance = balance > 0;
    const isValid =
      hasCartProducts && hasCartTotal && hasBalance && balance > total;

    if (!isValid) {
      this.router.navigate(['basket']);
    }
  }

  async formSubmit() {
    if(this.form.valid){
      const value= this.form.value;
      const checkout = {
        firstname: value.firstname || '',
        lastname: value.lastname || '',
        address: value.address || '',
        city: value.city || '',
        state: value.state || '',
        email: value.email || ''
      };
      const response = await this.store.dispatch(new SubmitPayment(checkout)).toPromise();
      this.paymentSuccesfull = true;
    }
  }

  formReset() {
    this.form.reset();
  }

  public get isValidFirstname(): boolean {
    return !(
      this.form.controls['firstname'].dirty &&
      this.form.controls['firstname'].errors
    );
  }
  public get isValidLastname(): boolean {
    return !(
      this.form.controls['lastname'].dirty &&
      this.form.controls['lastname'].errors
    );
  }
  public get isValidAddres(): boolean {
    return !(
      this.form.controls['address'].dirty &&
      this.form.controls['address'].errors
    );
  }
  public get isValidCity(): boolean {
    return !(
      this.form.controls['city'].dirty && this.form.controls['city'].errors
    );
  }
  public get isValidState(): boolean {
    return !(
      this.form.controls['state'].dirty && this.form.controls['state'].errors
    );
  }
  public get isValidEmail(): boolean {
    return !(
      this.form.controls['email'].dirty && this.form.controls['email'].errors
    );
  }
}
