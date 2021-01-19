import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { RestService } from 'src/app/model/rest.service';
import { LoggerService } from 'src/app/model/logger.service';
import { ModalWindowService } from 'src/app/model/modal-window.service';

enum Status {
  ADD = 'add',
  EDIT = 'edit'
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  public productForm: FormGroup;

  public id: number;
  public name: FormControl;
  public category: FormControl;
  public description: FormControl;
  public price: FormControl;

  public mode: boolean = true;
  private subscrGetProduct: Subscription;
  private subscrAction: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productRepository: ProductRepository,
    private restService: RestService,
    private logger: LoggerService,
    private modalWindowService: ModalWindowService
  ) {
    this.createFormControls();
    this.createForm();
    this.getParams();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    (this.subscrGetProduct) ? this.subscrGetProduct.unsubscribe() : null;
    (this.subscrAction) ? this.subscrAction.unsubscribe() : null;
  }

  private getParams(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const mode = params.get('mode');
      if (mode === Status.EDIT) {
        this.mode = false;
        this.id = +params.get('id');

        if (this.id) {
          this.subscrGetProduct = this.productRepository.getProductById(this.id).
            subscribe((product: Product) => {
              this.changeFormControls(product);
            });
        } else {
          this.logger.log('не найден продукт по id');
        }
      }
    })
  }

  private createFormControls(): void {
    this.name = new FormControl('', [Validators.required]);
    this.category = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required]);
  }

  private createForm(): void {
    this.productForm = new FormGroup({
      name: this.name,
      category: this.category,
      description: this.description,
      price: this.price
    });
  }

  private changeFormControls(product: Product): void {
    this.name.setValue(product.name);
    this.category.setValue(product.category);
    this.description.setValue(product.description);
    this.price.setValue(product.price);
  }

  private createProduct(id?: number): Product {
    return new Product({
      id: id || null,
      name: this.name.value,
      category: this.category.value,
      description: this.description.value,
      price: this.price.value
    });
  }

  public send(): void {
    const condition = this.modalWindowService.confirm();

    if (condition) {
      const product = this.createProduct(this.id);
      this.productForm.reset();
      let msg: string;

      if (this.mode) {
        msg = `добавлен продукт: `;
        this.subscrAction = this.restService.add(product).subscribe();
      } else {
        msg = `обновлен продукт: `;
        this.subscrAction = this.restService.update(product).subscribe();
      }
      msg += `
        id = ${product.id}
        name = ${product.name}
        category = ${product.category}
        description = ${product.description}
        price = ${product.price}`;
      this.logger.log(msg);
      this.mode = true;
      this.router.navigate(['/admin/main/products']);
    }
  }

}