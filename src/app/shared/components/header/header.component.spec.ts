import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // Selectors
  const selectorTitle = '.header__title h1';
  const selectorTitleLink = '.header__title a';
  const selectorTotalSpan = '.header__total span';
  const selectorCartSpan = '.header__cart span';
  const selectorCartLink = '.header__cart a';

  //Values
  const valueTitle = 'Marketplace';
  const valueCartLink = '/basket';


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // REQUERIMENT TEST 1
  it('should have a site title Marketplace', () => {
    expect(component.title).toEqual(valueTitle);
  });

  // REQUERIMENT TEST 2
  it('should render the site title inside h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selectorTitle).textContent).toContain(valueTitle);
  });

  // REQUERIMENT TEST 3
  it('should have a site title (with a click to redirect to home)', () => {
    const compiled = fixture.debugElement.nativeElement;
    const haveTitle = component.title === valueTitle;
    const whenClickRedirectHome = compiled.querySelector(selectorTitleLink).getAttribute("href") === '/'
    expect(haveTitle && whenClickRedirectHome).toBeTruthy();
  });

  // REQUERIMENT TEST 4
  it('should have a wallet balance (have it initialised with a value)', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selectorTotalSpan).textContent).toContain('$0');
  });

  // REQUERIMENT TEST 5
  it('should have a basket icon with a count of items ', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(selectorCartSpan)).toBeTruthy();
  });

    // REQUERIMENT TEST 5
    it('should have a basket icon when a click on the basket will navigate to a basket route', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(selectorCartLink).getAttribute("href")).toContain(valueCartLink);
    });

});
