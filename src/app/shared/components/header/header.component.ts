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


  @Select(MarketplaceState.getBalance) balance$!: Observable<number>;
  @Select(MarketplaceState.getCartCount) count$!: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

}
