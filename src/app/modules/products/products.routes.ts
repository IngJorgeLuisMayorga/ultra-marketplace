import { Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductDetailViewComponent } from "./views/product-detail-view/product-detail-view.component";
import { ProductsShowcaseViewComponent } from "./views/products-showcase-view/products-showcase-view.component";

export const ProductsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        title: "Products | Ultra Marketplace",
        component: ProductsShowcaseViewComponent
      },
      {
        path: 'detail/:id',
        title: "Product ${:id} | Ultra Marketplace",
        component: ProductDetailViewComponent
      }
    ]
  },
]
