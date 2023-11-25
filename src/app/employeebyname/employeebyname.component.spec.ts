import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeebynameComponent } from './employeebyname.component';

describe('EmployeebynameComponent', () => {
  let component: EmployeebynameComponent;
  let fixture: ComponentFixture<EmployeebynameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeebynameComponent]
    });
    fixture = TestBed.createComponent(EmployeebynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
