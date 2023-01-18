import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import { tap } from 'rxjs';
import { Product } from '../modules/products/models/Product.model';
import { ProductsRepositoryService } from '../modules/products/services/products-repository.service';
import { AddProductToCart, FetchProducts } from './marketplace.actions';
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
  static getProducts(state: IMarketplace): Product[] {
      return state.productsStore.products;
  }

  @Selector()
  static getProductsInCart(state: IMarketplace): Product[] {
      return state.cartStore.products;
  }

  @Selector()
  static getCartCount(state: IMarketplace):number {
      return state.cartStore.count;
  }

  @Selector()
  static getLoadingProducts(state: IMarketplace): boolean {
      return state.productsStore.isLoading;
  }


  @Action(FetchProducts)
    fetchProducts({getState, setState}: StateContext<IMarketplace>) {
        return this.productsRepository.getAll().pipe(tap((products) => {
            const state = getState();
            const productsStore = Object.assign({}, {...state.productsStore });
            productsStore.products = Array.from(new Set([...productsStore.products, ...products]));
            productsStore.isLoading = false;
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

  @Action(AddProductToCart)
    addToCart({getState, setState}: StateContext<IMarketplace>, action: AddProductToCart) {

      const state = getState();
      const product = action.payload;
      const productId = product.id;
      const productsStore = Object.assign({}, {...state.productsStore });
      const cartStore = Object.assign({}, {...state.cartStore });

      console.log(' @Action :: addToCart ', action)

      // Update Aviability product in ProductsStore
      productsStore.products = productsStore.products.map(product => {
        if(product.id === productId){
          return {
            ...product,
            available: false,
          }
        } else return product;
      });

      // Push Product to Cart
      cartStore.products = Array.from(new Set([...cartStore.products, product]));
      cartStore.count = cartStore.products.length;
      cartStore.total = cartStore.products.map(item => item.price).reduce((curr, sum) => (curr) + sum, 0);

      setState({
        ...state,
        productsStore: productsStore,
        cartStore: cartStore
      });

    }



}
