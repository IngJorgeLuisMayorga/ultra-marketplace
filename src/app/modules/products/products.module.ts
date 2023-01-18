import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Router, RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routes';
import { ProductsShowcaseViewComponent } from './views/products-showcase-view/products-showcase-view.component';
import { ProductDetailViewComponent } from './views/product-detail-view/product-detail-view.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsShowcaseViewComponent,
    ProductDetailViewComponent
  ],
  imports: [CommonModule,SharedModule, RouterModule.forRoot(ProductsRoutes)],
  exports:[RouterModule]
})
export class ProductsModule {}
