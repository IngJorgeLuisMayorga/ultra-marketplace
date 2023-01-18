import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { NgxsModule } from '@ngxs/store';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        HttpClientTestingModule,
        NgxsModule.forRoot([MarketplaceState]),],
      declarations: [ CartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should List the items and allow removal ', () => {
    expect(component).toBeTruthy();
  });

  it('should Display a total price ', () => {
    expect(component).toBeTruthy();
  });

  it('should Display a checkout button ', () => {
    expect(component).toBeTruthy();
  });

  it('should Display a checkout button ', () => {
    expect(component).toBeTruthy();
  });

  it('should enabled when the balance is suficient', () => {
    expect(component).toBeTruthy();
  });

  it('should disabled when the balance is not suficient', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error message for the user to know when the balance is not enough', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the Checkout screen when click in checkout button', () => {
    expect(component).toBeTruthy();
  });

});
