import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { OrderRestService } from 'src/app/model/order-rest.service';
import { Order } from 'src/app/model/order.model';
import { CartRepository } from '../cart/cart.repository';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public myForm: FormGroup;
  public name: FormControl;
  public address: FormControl;

  constructor(
    public cartRepository: CartRepository,
    private orderRestService: OrderRestService
  ) {
    this.createFormControls();
    this.createForm();
  }

  ngOnInit(): void {
  }

  public completeOrder(): void {
    const order = new Order(this.myForm.value, this.cartRepository.getCartLineList());
    this.orderRestService.addOrder(order).subscribe(() => {
      this.cartRepository.clear();
    });
  }

  public hasErrors(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty) && !!control.errors;
  }

  private createFormControls(): void {
    this.name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
    this.address = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]);
  }

  private createForm(): void {
    this.myForm = new FormGroup({
      name: this.name,
      address: this.address
    });
  }

}