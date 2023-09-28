import { Component, EventEmitter, Output } from '@angular/core';
import { Perfil } from '../../interfaces/perfil.interface';

@Component({
  selector: 'auth-add-perfil',
  templateUrl: './add-auth-perfil.component.html',
  styleUrls: ['./add-auth-perfil.component.css']
})
export class AddAuthPerfilComponent {

  @Output()
  public onEventNewItem: EventEmitter<Perfil> = new EventEmitter();

  public item : Perfil = {
    nombre : "",
    numero : 0
  }

  emitItem():void {

    // debugger;
    console.log( "add perfil" )
    console.log( this.item )
    if( this.item.nombre.length === 0) return;
    // debugger;
    this.onEventNewItem.emit( { ...this.item });

    this.item.nombre = "";
    this.item.numero = 0;
  }
}
