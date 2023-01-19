import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxsModule, Store} from '@ngxs/store';
import {InputTextModule} from 'primeng/inputtext';

import { CheckoutComponent } from './checkout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { AddProductToCart, FetchProducts } from 'src/app/store/marketplace.actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CheckoutComponent', () => {

  let store: Store;
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        SharedModule, FormsModule, InputTextModule , ReactiveFormsModule, RouterTestingModule,
        NgxsModule.forRoot([MarketplaceState]), HttpClientTestingModule],
      declarations: [ CheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    store = TestBed.inject(Store);

    // Test Prep Scenario, 3 Products in Cart
    const response = await store.dispatch(new FetchProducts()).toPromise();
    const products = response.marketplace.productsStore.products;
    await store.dispatch(new AddProductToCart(products[0])).toPromise();

    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Display a form allowing the user to enter his personal information', () => {
    const form = fixture.debugElement.queryAll(By.css('.checkout__form'));
    const firstname_input = fixture.debugElement.query(By.css('#float-input-firstname'));
    const lastname_input = fixture.debugElement.query(By.css('#float-input-lastname'));
    const address_input = fixture.debugElement.query(By.css('#float-input-address'));
    const city_input = fixture.debugElement.query(By.css('#float-input-city'));
    const state_input = fixture.debugElement.query(By.css('#float-input-state'));
    const email_input = fixture.debugElement.query(By.css('#float-input-email'));
    expect(form).toBeTruthy();
    expect(firstname_input).toBeTruthy();
    expect(lastname_input).toBeTruthy();
    expect(address_input).toBeTruthy();
    expect(city_input).toBeTruthy();
    expect(state_input).toBeTruthy();
    expect(email_input).toBeTruthy();
  });

  it('should have Basic validation rules should be applied to not allow purchases without a valid form', async () => {

    expect(component.paymentSuccesfull).toBeFalsy();

    const firstname_input = fixture.debugElement.query(By.css('#float-input-firstname'));
    const firstname_el = firstname_input.nativeElement;
    firstname_el.value = 'Jon';
    firstname_el.dispatchEvent(new Event('input'));

    const lastname_input = fixture.debugElement.query(By.css('#float-input-lastname'));
    const lastname_el = lastname_input.nativeElement;
    lastname_el.value = 'Doe';
    lastname_el.dispatchEvent(new Event('input'));

    const address_input = fixture.debugElement.query(By.css('#float-input-address'));
    const address_el = address_input.nativeElement;
    address_el.value = '299 S. Brandywine Court Union, NJ 07083';
    address_el.dispatchEvent(new Event('input'));

    const city_input = fixture.debugElement.query(By.css('#float-input-city'));
    const city_el = city_input.nativeElement;
    city_el.value = 'Miami';
    city_el.dispatchEvent(new Event('input'));

    const state_input = fixture.debugElement.query(By.css('#float-input-state'));
    const state_el = state_input.nativeElement;
    state_el.value = 'Florida';
    state_el.dispatchEvent(new Event('input'));

    const email_input = fixture.debugElement.query(By.css('#float-input-email'));
    const email_el = email_input.nativeElement;
    email_el.value = 'jondoe@ultra.io';
    email_el.dispatchEvent(new Event('input'));

    const submit_button = fixture.debugElement.query(By.css('#submit-btn'));
    submit_button.nativeElement.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.paymentSuccesfull).toBeTruthy();

  });


  it('should fail validation rules should be applied to not allow purchases without a valid form', async () => {

    expect(component.paymentSuccesfull).toBeFalsy();

    const firstname_input = fixture.debugElement.query(By.css('#float-input-firstname'));
    const firstname_el = firstname_input.nativeElement;
    firstname_el.value = 'Jon';
    firstname_el.dispatchEvent(new Event('input'));

    const lastname_input = fixture.debugElement.query(By.css('#float-input-lastname'));
    const lastname_el = lastname_input.nativeElement;
    lastname_el.value = 'Doe';
    lastname_el.dispatchEvent(new Event('input'));

    const address_input = fixture.debugElement.query(By.css('#float-input-address'));
    const address_el = address_input.nativeElement;
    address_el.value = '299 S. Brandywine Court Union, NJ 07083';
    address_el.dispatchEvent(new Event('input'));

    const city_input = fixture.debugElement.query(By.css('#float-input-city'));
    const city_el = city_input.nativeElement;
    city_el.value = 'Miami';
    city_el.dispatchEvent(new Event('input'));

    const state_input = fixture.debugElement.query(By.css('#float-input-state'));
    const state_el = state_input.nativeElement;
    state_el.value = 'Florida';
    state_el.dispatchEvent(new Event('input'));

    const email_input = fixture.debugElement.query(By.css('#float-input-email'));
    const email_el = email_input.nativeElement;
    email_el.value = 'jondoe ultra.io';
    email_el.dispatchEvent(new Event('input'));

    const submit_button = fixture.debugElement.query(By.css('#submit-btn'));
    submit_button.nativeElement.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.paymentSuccesfull).toBeFalsy();

  });

});
