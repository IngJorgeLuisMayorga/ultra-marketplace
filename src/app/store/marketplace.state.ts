import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import { tap } from 'rxjs';
import { ProductsRepositoryService } from '../modules/products/services/products-repository.service';
import { FetchProducts } from './marketplace.actions';
import { DefaultMarketPlace, IMarketplace } from './marketplace.model';

@State<IMarketplace>({
  name: 'marketplace',
  defaults: DefaultMarketPlace
})
@Injectable()
export class MarketplaceState {

  constructor(private productsRepository: ProductsRepositoryService) {
  }

  @Selector()
  static getBalance(state: IMarketplace) {
      return state.userStore.balance;
  }

  @Selector()
  static getProducts(state: IMarketplace) {
      return state.productsStore.products;
  }


  @Action(FetchProducts)
    fetchProducts({getState, setState}: StateContext<IMarketplace>) {
        return this.productsRepository.getAll().pipe(tap((products) => {
            const state = getState();
            const productsStore = Object.assign({}, {...state.productsStore });
            productsStore.products = Array.from(new Set([...productsStore.products, ...products]));
            productsStore.pagination = {
              from : 0,
              to : productsStore.products.length
            }
            setState({
                ...state,
                productsStore: productsStore
            });
        }));
    }



}
