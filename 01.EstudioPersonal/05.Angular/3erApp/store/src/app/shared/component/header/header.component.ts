import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  template:  `<mat-toolbar color="primary">
                <span>Primera aplicación en angular - </span>
                <span class="spacer"></span>
                <app-cart></app-cart>
              </mat-toolbar>` ,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  ngOnInit(): void {
    
  }
}
