import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.inteface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  product:Product[] = [];
  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
  }

  get quantityAction$(): Observable<number>{
    return this.quantitySubject.asObservable();
  }

  get cartAction$(): Observable<Product[]>{
    return this.cartSubject.asObservable();
  }

  public updateCart(product:Product):void{
    this.addToCart(product);
    this.calcularTotalOrden();
    this.quanittyProducts();
  }

  private addToCart(product:Product):void{
    this.product.push(product);
    this.cartSubject.next(this.product);
  }

  private calcularTotalOrden():void{
    const total = this.product.reduce((acc, prod) => acc += prod.price,  0);
    this.totalSubject.next(total);
  }

  private quanittyProducts():void{
    const total = this.product.length;
    this.quantitySubject.next(total);
  }

  constructor() { }
}
