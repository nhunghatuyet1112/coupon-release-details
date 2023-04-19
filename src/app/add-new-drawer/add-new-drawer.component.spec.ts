import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDrawerComponent } from './add-new-drawer.component';

describe('AddNewDrawerComponent', () => {
  let component: AddNewDrawerComponent;
  let fixture: ComponentFixture<AddNewDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
