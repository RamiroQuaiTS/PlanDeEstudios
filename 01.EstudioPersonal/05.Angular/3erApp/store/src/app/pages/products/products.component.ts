import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from './interfaces/product.inteface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  template: `
    <section class="products">
      <app-product 
          (addToCartClick)="addToCart($event)"
          [product]="product" 
          *ngFor="let product of products">
      </app-product>
    </section>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(private productSvc: ProductService, private shopingCartSrv : ShoppingCartService){}

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap(res => console.log(res))
      ).subscribe();    

      this.productSvc.getProducts()
      .pipe(
        tap((products: Product[]) => this.products = products)
      ).subscribe();       
  }

  addToCart(producto: Product): void{
    this.shopingCartSrv.updateCart(producto)
  }

}
