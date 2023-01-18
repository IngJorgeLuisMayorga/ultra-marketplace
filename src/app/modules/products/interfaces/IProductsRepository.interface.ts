import { Observable } from "rxjs";
import { Product } from "../models/Product.model";
import { IProductHTTP } from "./IProductHTTP.interface";

export interface IProductsRepository  {
  getAll(): Observable<Product[]>
}
