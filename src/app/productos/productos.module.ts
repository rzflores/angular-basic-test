import { NgModule } from "@angular/core";
import { ProductoComponent } from "./components/producto/producto.component";
import { ListaComponent } from "./components/lista/lista.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ProductoComponent,
        ListaComponent
    ],
    imports:[
        CommonModule,
    ],
    exports: [
        ProductoComponent,
        ListaComponent
    ]
})
export class ProductosModule{}