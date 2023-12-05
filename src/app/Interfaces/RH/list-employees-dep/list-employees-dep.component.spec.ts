import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeesDepComponent } from './list-employees-dep.component';

describe('ListEmployeesDepComponent', () => {
  let component: ListEmployeesDepComponent;
  let fixture: ComponentFixture<ListEmployeesDepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmployeesDepComponent]
    });
    fixture = TestBed.createComponent(ListEmployeesDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
