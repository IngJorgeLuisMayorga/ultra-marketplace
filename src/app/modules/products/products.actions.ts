import { Product } from "./models/Product.model";

export class AddProduct {
  static readonly type = '[Products] Add Product';
  constructor(public payload: Product) {}
}
