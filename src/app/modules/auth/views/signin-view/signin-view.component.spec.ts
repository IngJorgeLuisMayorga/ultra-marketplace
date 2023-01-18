import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { SigninViewComponent } from './signin-view.component';

describe('SigninViewComponent', () => {
  let component: SigninViewComponent;
  let fixture: ComponentFixture<SigninViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ SigninViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
