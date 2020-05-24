import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { paymentOptions } from '../payment_options';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  paymentOptions = paymentOptions;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      paymentOption: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    var cart_items = this.cartService.getItems();
    let sum = 0;
    let item = '';
    cart_items.forEach(function (value) {
      sum+=value['price'];
    });
    cart_items.forEach(function (value) {
      item+=value['name'];
    });
    console.warn('User selected a ' + item + ' and paid $' + sum + ' with ' + customerData.paymentOption);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}