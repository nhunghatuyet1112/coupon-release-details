import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrStructureComponent } from './hr-structure.component';

describe('HrStructureComponent', () => {
  let component: HrStructureComponent;
  let fixture: ComponentFixture<HrStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
