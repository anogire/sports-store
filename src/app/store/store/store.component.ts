import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { CartRepository } from '../cart/cart.repository';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public productList$: Observable<Product[]>;
  public categoryList$: Observable<any>;

  public viewRows: number = 3;
  public page: number = 1;

  constructor(
    private productRepository: ProductRepository,
    private cartRepository: CartRepository,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productList$ = this.productRepository.getByCategory();
    this.categoryList$ = this.productRepository.getCategories();
  }

  public filter(condition?: string): void {
    this.productList$ = this.productRepository.getByCategory(condition);
    this.page = 1;
  }

  public addToCart(product: Product): void {
    this.cartRepository.addCartLine(product);
    this.router.navigate(['/cart']);
  }

}
