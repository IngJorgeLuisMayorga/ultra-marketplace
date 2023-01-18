import { Product } from "../models/Product.model";
import { IProductHTTP } from "./IProductHTTP.interface";

export interface IProductsAPI  {
  getProducts(): Promise<IProductHTTP[]>
}
