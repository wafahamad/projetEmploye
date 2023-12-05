import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformingEmpComponent } from './performing-emp.component';

describe('PerformingEmpComponent', () => {
  let component: PerformingEmpComponent;
  let fixture: ComponentFixture<PerformingEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformingEmpComponent]
    });
    fixture = TestBed.createComponent(PerformingEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
