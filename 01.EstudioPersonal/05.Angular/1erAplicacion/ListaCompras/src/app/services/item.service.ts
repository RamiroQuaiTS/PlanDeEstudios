import { Injectable } from '@angular/core';
import { Item } from '../Modelos/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:Item[] = [
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
  ];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item)
  }

}
