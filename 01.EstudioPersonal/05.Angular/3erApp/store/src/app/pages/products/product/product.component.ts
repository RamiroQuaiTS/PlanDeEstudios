import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product.inteface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!:Product;
  @Output() addToCartClick = new EventEmitter<Product>

  constructor(){}
  
  onClick():void{
    ////console.log('click', this.product);
    this.addToCartClick.emit(this.product);
  }

}
