import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public listaProducto : string[] = ['producto 1','producto 2' , ' producto 3']
  public elementoBorrado? : string;
  borrarHeroe():void {
    this.elementoBorrado =  this.listaProducto.pop()
  }
}
