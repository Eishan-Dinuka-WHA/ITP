import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHomeComponent } from './payment-home.component';

describe('PaymentHomeComponent', () => {
  let component: PaymentHomeComponent;
  let fixture: ComponentFixture<PaymentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
