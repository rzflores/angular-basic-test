import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent{
    public title : string = 'Hola mundo';
    public contador: number = 0;
  
  
    aumentar(value : number) : void{
      this.contador += 1; 
    } 
    disminiur(value : number) : void{
      this.contador -= 1;
    }
    resetear() : void{
      this.contador = 0;
    }
  
}