import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserEditViewComponent } from './user-edit-view.component';

describe('UserEditViewComponent', () => {
  let component: UserEditViewComponent;
  let fixture: ComponentFixture<UserEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ UserEditViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
