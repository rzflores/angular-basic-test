import { Component } from '@angular/core';
import { Perfil } from '../interfaces/perfil.interface';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'main-page-auth',
    templateUrl: 'main-page.component.html'
})



export class MainPageAuthComponent {

    constructor( public  authService : AuthService ){}


    get listadoPerfiles(): Perfil[] {
        return [...this.authService.arrPerfiles];
    }
    
    // public arrPerfiles : Perfil[] = [
    //     {
    //         nombre : "administrador",
    //         numero : 2
    //     },
    //     {
    //         nombre : "entrante",
    //         numero : 5
    //     },
    //     {
    //         nombre : "practicante",
    //         numero : 1
    //     }
    // ];

     newItem( item: Perfil ): void {
        this.authService.onNewItem( item );       
    }

    deleteItem( id: string ):void {
        this.authService.onDeleteItem( id );
    }
    

}