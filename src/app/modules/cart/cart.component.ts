import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { combineLatest, combineLatestAll, forkJoin, map, merge, Observable } from 'rxjs';
import { mock_src } from 'src/app/shared/helpers/mockSrc';
import { AddProductToCart, FetchProducts, RemoveProductToCart } from 'src/app/store/marketplace.actions';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { Product } from '../products/models/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Select(MarketplaceState.getProductsInCart) products$!: Observable<Product[]>;
  @Select(MarketplaceState.getCartTotal) total$!: Observable<number>;
  @Select(MarketplaceState.getBalance) balance$!: Observable<number>;

  public isDisabled$: Observable<boolean> =  combineLatest([this.total$, this.balance$]).pipe(map(response => response[0] >= response[1] ))


  constructor(private store: Store) {

  }



  ngOnInit(): void {
    this.store.dispatch(new FetchProducts()).subscribe(response => {
      const products = response.marketplace.productsStore.products;
      this.store.dispatch(new AddProductToCart(products[0]))
      this.store.dispatch(new AddProductToCart(products[1]))
      this.store.dispatch(new AddProductToCart(products[2]))
      console.error('REPONSE STORE', response)
    })
  }

  isDisabled(total: number, balance: number): boolean{
    return total <= balance;
  }

  onProductRemove(product: Product){
    this.store.dispatch(new RemoveProductToCart(product))
  }

  onCheckout(){

  }

}
