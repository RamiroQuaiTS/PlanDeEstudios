import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Item } from 'src/app/Modelos/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() borrarItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: Item){
    this.borrarItem.emit(item);
  }

  onCheck(item: Item){
    item.completado = !item.completado;
    this.toggleItem.emit(item);
  }
}
