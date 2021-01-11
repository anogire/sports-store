import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public productList$: Observable<Product[]>;
  public categoryList$: Observable<any>;

  constructor(
    private productRepository: ProductRepository
  ) { }

  ngOnInit(): void {
    this.productList$ = this.productRepository.getByCategory();
    this.categoryList$ = this.productRepository.getCategories();
  }

  public filter(condition?: string): void {
    this.productList$ = this.productRepository.getByCategory(condition);
  }

}
