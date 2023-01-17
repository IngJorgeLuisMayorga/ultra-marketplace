import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsShowcaseViewComponent } from './products-showcase-view.component';

describe('ProductsShowcaseViewComponent', () => {
  let component: ProductsShowcaseViewComponent;
  let fixture: ComponentFixture<ProductsShowcaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
