import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { FetchProducts } from '../../../../store/marketplace.actions';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-products-showcase-view',
  templateUrl: './products-showcase-view.component.html',
  styleUrls: ['./products-showcase-view.component.scss']
})
export class ProductsShowcaseViewComponent implements OnInit {

  @Select(MarketplaceState.getProducts) products$!: Observable<Product[]>;

  public end = 12;

  constructor(private store: Store) {}

  ngOnInit(): void {

    //Initial Load
    this.fetchProducts();

  }

  fetchProducts(){
    this.store.dispatch(new FetchProducts())
  }




}
