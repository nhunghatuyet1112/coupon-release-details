import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPolicyComponent } from './coupon-policy.component';

describe('CouponPolicyComponent', () => {
  let component: CouponPolicyComponent;
  let fixture: ComponentFixture<CouponPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponPolicyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CouponPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
