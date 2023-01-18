import { Product } from "../modules/products/models/Product.model";

const INITIAL_WALLET = 100;


export interface IMarketplace {

  // Products
  productsStore:{
    products: Product[],
    isLoading: boolean;
    pagination: {
      from : number;
      to: number;
    }
  }

  //Cart
  cartStore: {
    products: Product[],
    total: number;
    count: number;
  }

  //Checkout
  checkoutStore:{
    firtname: string;
    lastname: string;
    address:string;
    city: string;
    state: string;
    email: string;
  }

  //Payment
  paymentStore:{
    paymentId: number;
    paymentStatus: string;
  }

  //User
  userStore: {
    balance: number;
    purchases: any[];
  }



}


export const DefaultMarketPlace: IMarketplace = {

  // Products
  productsStore:{
    isLoading: true,
    products: [],
    pagination: {
      from : 0,
      to: 0,
    }
  },

  //Cart
  cartStore: {
    products: [],
    total: 0,
    count: 0,
  },

  //Checkout
  checkoutStore:{
    firtname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    email: '',
  },

  //Payment
  paymentStore:{
    paymentId: 0,
    paymentStatus: '',
  },

  //User
  userStore: {
    balance: INITIAL_WALLET,
    purchases: []
  }
}
