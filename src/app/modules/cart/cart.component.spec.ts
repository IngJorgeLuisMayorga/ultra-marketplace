import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarketplaceState } from 'src/app/store/marketplace.state';
import { NgxsModule, Store} from '@ngxs/store';

import { CartComponent } from './cart.component';
import { AddProductToCart, FetchProducts } from 'src/app/store/marketplace.actions';
import { By } from '@angular/platform-browser';
import { DefaultMarketPlace, IMarketplace } from 'src/app/store/marketplace.model';
import { ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../products/models/Product.model';


describe('CartComponent', () => {

  let store: Store;
  let dispatchSpy: jasmine.Spy;
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
    fixture.autoDetectChanges(true);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    // Populate Default 3 Items
    const response = await store.dispatch(new FetchProducts()).toPromise();
    const products = response.marketplace.productsStore.products;
    await store.dispatch(new AddProductToCart(products[0])).toPromise();
    await store.dispatch(new AddProductToCart(products[1])).toPromise();
    await store.dispatch(new AddProductToCart(products[2])).toPromise();

    fixture.detectChanges();
    await fixture.whenStable();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should List the items ', async () => {
      const compileds = fixture.debugElement.queryAll(By.css('.product'));
      expect(compileds.length).toEqual(3);
  });

  it('should allow removal ', async() => {

    const compileds = fixture.debugElement.queryAll(By.css('.product .product__delete button'));
    expect(compileds.length).toEqual(3);

    const button1 = compileds[0];
    button1.nativeElement.click();

    fixture.detectChanges();
    await fixture.whenStable();

    const compiledsAfter = fixture.debugElement.queryAll(By.css('.product .product__delete button'));
    expect(compiledsAfter.length).toEqual(2);

  });

  it('should Display a total price ', () => {
    const compiled = fixture.debugElement.nativeElement;
    const products = store.selectSnapshot<Product[]>(MarketplaceState.getProductsInCart);
    const expectedTotal:number = products.map(item => item.price).reduce((elem, sum) => elem + sum);
    const computedTotal:string = compiled.querySelector('.total__value').textContent;
    expect(String(computedTotal)).toContain(String(expectedTotal));
  });

  it('should Display a checkout button ', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.checkout button')).toBeTruthy();
  });

  it('should disabled when the balance is not suficient', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.checkout button').disabled).toBeTruthy();
  });

  it('should enabled when the balance is suficient', async () => {

    const compileds = fixture.debugElement.queryAll(By.css('.product .product__delete button'));

    const button2 = compileds[1];
    button2.nativeElement.click();

    const button3 = compileds[2];
    button3.nativeElement.click();

    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.checkout button').getAttribute('disabled')).toBeFalsy();
  });

  it('should display an error message for the user to know when the balance is not enough', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.checkout__error_message')).toBeTruthy();
  });

  it('should redirect to the Checkout screen when click in checkout button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.checkout button').getAttribute('ng-reflect-router-link')).toContain('checkout');
  });

});
