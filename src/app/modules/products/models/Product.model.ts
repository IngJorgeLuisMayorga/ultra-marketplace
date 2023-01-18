export type Product = {
  id: number;
  name: string;
  img: string;
  stock: number;
  price: number;
  discount?: number;
  available?: boolean;
  created_at: string;
  updated_at: string;
}

export class ProductClass {

}
