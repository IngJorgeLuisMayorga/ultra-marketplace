import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { RecoveryPasswordViewComponent } from './recovery-password-view.component';

describe('RecoveryPasswordViewComponent', () => {
  let component: RecoveryPasswordViewComponent;
  let fixture: ComponentFixture<RecoveryPasswordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ RecoveryPasswordViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryPasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
