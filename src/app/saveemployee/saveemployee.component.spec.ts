import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveemployeeComponent } from './saveemployee.component';

describe('SaveemployeeComponent', () => {
  let component: SaveemployeeComponent;
  let fixture: ComponentFixture<SaveemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveemployeeComponent]
    });
    fixture = TestBed.createComponent(SaveemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
