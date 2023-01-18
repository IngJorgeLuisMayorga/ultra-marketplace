import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { MarketplaceState } from 'src/app/store/marketplace.state';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {

    //Check if Store has products
    this.validateRoute();



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

}
