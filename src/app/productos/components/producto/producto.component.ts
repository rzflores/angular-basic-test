import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  public nombre : string = "Arroz";
  public precio : number = 100.0;
  public descripcion : string = "descripcion de prueb";
  public mostarBoton1 : boolean = true;
  public mostarBoton2 : boolean = true;


 get nombreUpper(){
  return this.nombre.toUpperCase();
 }
 getConcatenacion():string{
  return `Nombre - ${this.nombre} / Precio - ${this.precio} / descripcion - ${ this.descripcion } `
 }
 cambiarNombre():void{
  this.nombre = 'Arroz cambiado'
  this.mostarBoton2 = false;
 }
 cambiarPrecio():void{
  this.precio = 20.00
  this.mostarBoton1 = false;

 }
}
