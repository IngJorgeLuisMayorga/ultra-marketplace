import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsViewComponent } from './cart-details-view.component';

describe('CartDetailsViewComponent', () => {
  let component: CartDetailsViewComponent;
  let fixture: ComponentFixture<CartDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
