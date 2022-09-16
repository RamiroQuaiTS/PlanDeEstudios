import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Modelos/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string = 'http://localhost:3000/items';
  httpOptions = {
    header:{
      'Content-Type': 'application/json'
    }
  }
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
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url)
  }

  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item)
    return this.http.post<Item>(this.url, item)
  }

  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item)
  }

  delete(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id)
  }

}
