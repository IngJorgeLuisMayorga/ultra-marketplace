import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { NgxsModule } from '@ngxs/store';


import { ProductsShowcaseViewComponent } from './products-showcase-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsShowcaseViewComponent', () => {
  let component: ProductsShowcaseViewComponent;
  let fixture: ComponentFixture<ProductsShowcaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, NgxsModule.forRoot([MarketplaceState]), HttpClientTestingModule],
      declarations: [ ProductsShowcaseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsShowcaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
