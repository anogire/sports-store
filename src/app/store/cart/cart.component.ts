import { Component, OnInit } from '@angular/core';

import { CartRepository } from './cart.repository';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartRepository: CartRepository) { }

  ngOnInit(): void {
  }

}
