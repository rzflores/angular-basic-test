import { Injectable } from '@angular/core';
import { Perfil } from '../interfaces/perfil.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
public arrPerfiles: Perfil[] = [{
  id: uuid(),
  nombre : "administrador",
  numero : 2
},{
  id: uuid(),
  nombre : "entrante",
  numero : 5
},{
  id: uuid(),
  nombre : "practicante",
  numero : 1
}];

  constructor() { }


  onNewItem( item: Perfil ): void {

    const newItem : Perfil = {
      id : uuid(),
      ...item
      // nombre : item.nombre ,
      // numero : item.numero
    }
    this.arrPerfiles.push(newItem);
  }

  onDeleteItem( id: string ):void {
    this.arrPerfiles = this.arrPerfiles.filter( item => item.id !== id );
  }
}
