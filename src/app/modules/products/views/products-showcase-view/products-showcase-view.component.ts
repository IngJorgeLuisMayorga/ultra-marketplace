import { Component, HostListener, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { environment } from 'src/environments/environment';
import {
  AddProductToCart,
  FetchProducts,
} from '../../../../store/marketplace.actions';
import { Product } from '../../models/Product.model';
import { ProductsRepositoryService } from '../../services/products-repository.service';

@Component({
  selector: 'app-products-showcase-view',
  templateUrl: './products-showcase-view.component.html',
  styleUrls: ['./products-showcase-view.component.scss'],
})
export class ProductsShowcaseViewComponent implements OnInit {
  @Select(MarketplaceState.getProducts) products$!: Observable<Product[]>;
  @Select(MarketplaceState.getLoadingProducts) isLoading$!: Observable<boolean>;

  public message = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    //Initial Load
    this.fetchProducts();
    this.setLoadingMessage();
  }

  setLoadingMessage() {
    if (environment.mock)
      this.message = 'Simulating mock data timeload ...loading';
    if (!environment.mock) this.message = 'Fetching products ...loading';
  }

  fetchProducts() {
    this.store.dispatch(new FetchProducts());
  }

  onProductClick(product: Product) {

    console.log(' @onProductClick ', product);


    this.store.dispatch(new AddProductToCart(product)).toPromise().then(response => {

    })

  }
}
