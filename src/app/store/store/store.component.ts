import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit(): void {
    this.productRepository.getAll().subscribe((products: Product[]) => {
      console.log(products);
    })
  }

}
