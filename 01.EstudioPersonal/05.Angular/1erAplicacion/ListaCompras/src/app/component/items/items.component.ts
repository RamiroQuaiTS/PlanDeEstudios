import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Modelos/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemServices:ItemService) { }

  ngOnInit(): void {   
    //this.items = [];
    //this.items = this.itemServices.getItems();
    this.itemServices.getItems().subscribe(data =>{
      this.items = data;
      this.obtenerTotal();
    });
  
   /*
    this.items[0] = new Item(2, "Manzana", 65.98, 1, true);
    this.items[1] = new Item(2, "Pan", 28.80, 1, true);
    this.items[2] = new Item(2, "Huevo", 89, 1, true);
    this.items[3] = new Item(2, "Leche", 18, 1, true);
    */
  }

  borrarItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id)
    this.itemServices.delete(item).subscribe()
    this.obtenerTotal();
  }

  onCheck(item:Item){
    this.itemServices.toggleItem(item).subscribe()
    this.obtenerTotal();
  }

  obtenerTotal(){
    this.total = this.items
                .filter(x => !x.completado)
                .map(x => x.cantidad * x.precio)
                .reduce((acc, item) => acc += item , 0);
  }
}
