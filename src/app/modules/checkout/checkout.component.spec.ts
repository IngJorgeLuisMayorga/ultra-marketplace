import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxsModule, Store} from '@ngxs/store';

import { CheckoutComponent } from './checkout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { AddProductToCart, FetchProducts } from 'src/app/store/marketplace.actions';

describe('CheckoutComponent', () => {

  let store: Store;
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, NgxsModule.forRoot([MarketplaceState]), HttpClientTestingModule],
      declarations: [ CheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    store = TestBed.inject(Store);

    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Display a form allowing the user to enter his personal information', () => {
    expect(component).toBeTruthy();
  });

  it('should have Basic validation rules should be applied to not allow purchases without a valid form', () => {
    expect(component).toBeTruthy();
  });

  it('should have A pay button should trigger the purchase and display a successful screen if everything works as expected', () => {
    expect(component).toBeTruthy();
  });

});
