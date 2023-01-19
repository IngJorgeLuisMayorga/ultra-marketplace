import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import { tap } from 'rxjs';
import { ICheckout } from '../modules/checkout/models/ICheckout.model';
import { Product } from '../modules/products/models/Product.model';
import { ProductsRepositoryService } from '../modules/products/services/products-repository.service';
import { mock_src } from '../shared/helpers/mockSrc';
import { AddProductToCart, FetchProducts, RemoveProductToCart, SubmitPayment } from './marketplace.actions';
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
  static getCartTotal(state: IMarketplace):number {
      return state.cartStore.total;
  }

  @Selector()
  static getProducts(state: IMarketplace): Product[] {
      return state.productsStore.products.map( item => ({
        ...item,
        img: mock_src(item.id)
      }));
  }

  @Selector()
  static getProductsInCart(state: IMarketplace): Product[] {
      return state.cartStore.products.map( item => ({
        ...item,
        img: mock_src(item.id)
      }));
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

  @Action(RemoveProductToCart)
    removeFromCart({getState, setState}: StateContext<IMarketplace>, action: AddProductToCart) {

      const state = getState();
      const product = action.payload;
      const productId = product.id;
      const productsStore = Object.assign({}, {...state.productsStore });
      const cartStore = Object.assign({}, {...state.cartStore });

      // Update Aviability product in ProductsStore
      productsStore.products = productsStore.products.map(product => {
        if(product.id === productId){
          return {
            ...product,
            available: true,
          }
        } else return product;
      });

      // Push Product to Cart
      cartStore.products = cartStore.products.filter(item => item.id !== productId);
      cartStore.count = cartStore.products.length;
      cartStore.total = cartStore.products.map(item => item.price).reduce((curr, sum) => (curr) + sum, 0);

      setState({
        ...state,
        productsStore: productsStore,
        cartStore: cartStore
      });

    }


  @Action(SubmitPayment)
    submitPayment({getState, setState}: StateContext<IMarketplace>, checkout: ICheckout) {

      const state = getState();
      const userStore = Object.assign({}, {...state.userStore });
      const productsStore = Object.assign({}, {...state.productsStore });
      const cartStore = Object.assign({}, {...state.cartStore });
      const cartTotal = cartStore.total;
      const cartProducts = cartStore.products;
      const cartProductsIds = cartStore.products.map(item => item.id)

      // Reduce Wallet Balance and Update Purchases
      const purchases = [...userStore.purchases];
      purchases.push({
        total: cartTotal,
        date: new Date(),
        products:cartProducts
      });
      userStore.balance = userStore.balance - cartTotal;
      userStore.purchases = purchases;

      // Remove Products from Store
      productsStore.products = productsStore.products.filter(product => !cartProductsIds.includes(product.id))

      // Clear Cart
      cartStore.count = 0;
      cartStore.total = 0;
      cartStore.products = [];

      setState({
        ...state,
        userStore: userStore,
        productsStore: productsStore,
        cartStore: cartStore
      });

    }



}
