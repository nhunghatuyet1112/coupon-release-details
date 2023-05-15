import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionDrawerComponent } from './position-drawer.component';

describe('PositionDrawerComponent', () => {
  let component: PositionDrawerComponent;
  let fixture: ComponentFixture<PositionDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
