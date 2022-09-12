import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Modelos/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {   
    this.items = [
      {
        id: 0,
        titulo: "Manzana",
        precio: 20,
        cantidad: 2,
        completado: false
      },
      {
        id: 1,
        titulo: "Pan",
        precio: 28.70,
        cantidad: 1,
        completado: false
      },
      {
        id: 2,
        titulo: "Huevo",
        precio: 89,
        cantidad: 1,
        completado: false
      }
    ]
  
   /*
    this.items[0] = new Item(2, "Manzana", 65.98, 1, true);
    this.items[1] = new Item(2, "Pan", 28.80, 1, true);
    this.items[2] = new Item(2, "Huevo", 89, 1, true);
    this.items[3] = new Item(2, "Leche", 18, 1, true);
    */
  }

  borrarItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id)
  }
}
