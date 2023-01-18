import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AddProductToCart, FetchProducts } from 'src/app/store/marketplace.actions';
import { MarketplaceState } from 'src/app/store/marketplace.state';

const regexAddres = "^[\w\s ,.#-]+$";
const regexCity = "/^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  form = new FormGroup({
    "firstname": new FormControl("", [Validators.required, Validators.minLength(2)]),
    "lastname": new FormControl("", [Validators.required, Validators.minLength(2)]),
    "address": new FormControl("", [Validators.required, Validators.pattern(regexAddres), Validators.minLength(2)]),
    "city": new FormControl("", [Validators.required, Validators.pattern(regexCity),Validators.minLength(2)]),
    "state": new FormControl("", [Validators.required, Validators.minLength(2)]),
    "email": new FormControl("", [Validators.required, Validators.email]),
});


  constructor(private store: Store, private router: Router) { }

  async ngOnInit() {

    await this.init();

    //Check if Store has products
    this.validateRoute();

  }

  async init(){
    const response = await this.store.dispatch(new FetchProducts()).toPromise();
    const products = response.marketplace.productsStore.products;
    await this.store.dispatch(new AddProductToCart(products[0])).toPromise();
  }

  validateRoute(){

    const total = this.store.selectSnapshot(MarketplaceState.getCartTotal);
    const balance = this.store.selectSnapshot(MarketplaceState.getBalance);
    const products = this.store.selectSnapshot(MarketplaceState.getProductsInCart);

    const hasCartProducts = products.length > 0;
    const hasCartTotal= total > 0;
    const hasBalance = balance > 0;
    const isValid = hasCartProducts && hasCartTotal && hasBalance && (balance > total);

    if(!isValid){
      this.router.navigate(['basket'])
    }

  }

  formSubmit(){

  }

  formReset() {
    this.form.reset();
}

}
