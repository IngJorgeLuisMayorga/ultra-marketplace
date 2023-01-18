export interface IProductHTTP {
  id: number;
  name: string;
  img: string;
  stock: number;
  price: number;
  discount?: number;
  created_at: string;
  updated_at: string;
}
