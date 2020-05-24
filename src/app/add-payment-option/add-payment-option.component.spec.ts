import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentOptionComponent } from './add-payment-option.component';

describe('AddPaymentOptionComponent', () => {
  let component: AddPaymentOptionComponent;
  let fixture: ComponentFixture<AddPaymentOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaymentOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
