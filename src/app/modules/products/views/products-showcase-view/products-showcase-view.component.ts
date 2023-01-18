import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct } from '../../products.actions';

@Component({
  selector: 'app-products-showcase-view',
  templateUrl: './products-showcase-view.component.html',
  styleUrls: ['./products-showcase-view.component.scss']
})
export class ProductsShowcaseViewComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {

  }

  addAnimal(name: string) {
    this.store.dispatch(new AddProduct({
      id: 0,
      name: '',
      img: '',
      price: 0,
      discount: 0,
      stock: 0,
      updated_at: new Date().toString(),
      created_at: new Date().toString()
    }));
  }



}
