import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductsShowcaseViewComponent } from './products-showcase-view.component';

describe('ProductsShowcaseViewComponent', () => {
  let component: ProductsShowcaseViewComponent;
  let fixture: ComponentFixture<ProductsShowcaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
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
