import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Custom } from '../custom';
import { products } from '../products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name:string;
  price:number;
  description:string;
  customList:Array<Custom> = [];
  addProductForm;
  products = products;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.addProductForm = this.formBuilder.group({
      name: '',
      price: '',
      description: '',
    });
  }

  ngOnInit(): void {
    
  }


  onSubmit(productData) {
    
    let customObj = new Custom();
    customObj.name = productData.name;
    customObj.price = productData.price;
    customObj.description = productData.description; 
    this.products.push(customObj);
    this.addProductForm.reset();

    console.warn('Your product has been submitted', productData);
  }
}
