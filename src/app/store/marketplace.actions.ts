import { Product } from "../modules/products/models/Product.model";

export class FetchProducts {
  static readonly type = '[Products] Fetch Products from API';
  constructor() {}
}

export class AddProductToCart{
  static readonly type = '[Cart] Add Product to Car';
  constructor(public payload: Product) {}
}

export class RemoveProductToCart{
  static readonly type = '[Cart] Remove Product from Car';
  constructor(public payload: Product) {}
}
