import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CartRepository } from '../store/cart/cart.repository';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {


  constructor(
    public cartRepository: CartRepository,
    private location: Location
  ) {
  }

  ngOnInit(): void {
  }

  public hasPathParam(param: string): boolean {
    return this.location.path().includes(param);
  }

}
