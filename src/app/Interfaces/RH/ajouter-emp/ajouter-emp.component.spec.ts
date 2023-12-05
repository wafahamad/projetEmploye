import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmpComponent } from './ajouter-emp.component';

describe('AjouterEmpComponent', () => {
  let component: AjouterEmpComponent;
  let fixture: ComponentFixture<AjouterEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterEmpComponent]
    });
    fixture = TestBed.createComponent(AjouterEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
