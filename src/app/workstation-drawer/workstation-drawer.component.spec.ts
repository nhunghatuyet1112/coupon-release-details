import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationDrawerComponent } from './workstation-drawer.component';

describe('WorkstationDrawerComponent', () => {
  let component: WorkstationDrawerComponent;
  let fixture: ComponentFixture<WorkstationDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkstationDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkstationDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
