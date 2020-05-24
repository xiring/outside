import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PaymentCustom } from '../payment_custom';
import { paymentOptions } from '../payment_options';

@Component({
  selector: 'app-add-payment-option',
  templateUrl: './add-payment-option.component.html',
  styleUrls: ['./add-payment-option.component.css']
})
export class AddPaymentOptionComponent implements OnInit {
  name:string;
  customList:Array<PaymentCustom> = [];
  addPaymentForm;
  paymentOptions = paymentOptions;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.addPaymentForm = this.formBuilder.group({
      name: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(paymentData) {
    
    let customObj = new PaymentCustom();
    customObj.name = paymentData.name;
    this.paymentOptions.push(customObj);
    this.addPaymentForm.reset();

    console.warn('Your form has been submitted', paymentData);
  }

}
