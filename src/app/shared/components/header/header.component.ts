import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Select, Store} from '@ngxs/store';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { IMarketplace } from 'src/app/store/marketplace.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Marketplace';
  public wallet_src = `${environment.assets}assets/icons/wallet.png`;
  public cart_src = `${environment.assets}assets/icons/online-shopping.png`;

  @Select(MarketplaceState.getBalance) balance$!: Observable<number>;
  @Select(MarketplaceState.getCartCount) count$!: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

}
