import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDrawerComponent } from './department-drawer.component';

describe('DepartmentDrawerComponent', () => {
  let component: DepartmentDrawerComponent;
  let fixture: ComponentFixture<DepartmentDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
