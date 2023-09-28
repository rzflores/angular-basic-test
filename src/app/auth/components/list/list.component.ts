import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Perfil } from '../../interfaces/perfil.interface';

@Component({
  selector: 'auth-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  
  @Output()
  public onEventDeleteItem: EventEmitter<string> = new EventEmitter();

  @Input() 
  Perfiles : Perfil[] = [];

  deleteItem(id?:string){
    if(!id) return;
    this.onEventDeleteItem.emit( id )

  }


}
