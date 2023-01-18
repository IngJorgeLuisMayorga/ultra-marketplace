import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Select, Store} from '@ngxs/store';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { IMarketplace } from 'src/app/store/marketplace.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Marketplace';

  public wallet$: Observable<number>;
  public count$: Observable<number>;

  @Select(MarketplaceState.getBalance) balance$!: Observable<number>;

  constructor(private store: Store) {
    this.wallet$ = of(0);
    this.count$ = of(0);
  }

  ngOnInit(): void {
  }

}
