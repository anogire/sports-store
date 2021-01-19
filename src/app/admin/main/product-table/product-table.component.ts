import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { RestService } from 'src/app/model/rest.service';
import { LoggerService } from 'src/app/model/logger.service';
import { ModalWindowService } from 'src/app/model/modal-window.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  public productList$: Observable<Product[]>;
  private subscrDelete: Subscription;

  constructor(
    private restService: RestService,
    private productRepository: ProductRepository,
    private logger: LoggerService,
    private modalWindowService: ModalWindowService
  ) { }

  ngOnInit(): void {
    this.productList$ = this.productRepository.getAll();
  }
  ngOnDestroy(): void {
    (this.subscrDelete) ? this.subscrDelete.unsubscribe() : null;
  }

  public remove(product: Product): void {
    const condition = this.modalWindowService.confirm();

    if (condition) {
      const msg = `удален продукт: 
      id = ${product.id}
      name = ${product.name}
      category = ${product.category}
      description = ${product.description}
      price = ${product.price}`;
      this.logger.log(msg);

      this.subscrDelete = this.restService.remove(product.id).subscribe(() => {
        this.productList$ = this.productRepository.getAll();
      });
    }
  }

}