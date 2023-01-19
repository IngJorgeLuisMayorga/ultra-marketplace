import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { combineLatest, combineLatestAll, forkJoin, map, merge, Observable } from 'rxjs';
import { mock_src } from 'src/app/shared/helpers/mockSrc';
import { AddProductToCart, FetchProducts, RemoveProductToCart } from 'src/app/store/marketplace.actions';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { environment } from 'src/environments/environment';
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
  public empty_cart_src = `${environment.assets}assets/icons/empty-cart.png`;
  public delete_cart_src = `${environment.assets}assets/icons/recycle-bin.png`;


  constructor(private store: Store) {

  }



  ngOnInit(): void {

  }

  isDisabled(total: number, balance: number): boolean{
    return total <= balance;
  }

  onProductRemove(product: Product){
    this.store.dispatch(new RemoveProductToCart(product))
  }

}
