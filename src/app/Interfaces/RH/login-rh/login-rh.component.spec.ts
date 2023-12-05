import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRhComponent } from './login-rh.component';

describe('LoginRhComponent', () => {
  let component: LoginRhComponent;
  let fixture: ComponentFixture<LoginRhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRhComponent]
    });
    fixture = TestBed.createComponent(LoginRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
