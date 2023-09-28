import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageAuthComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddAuthPerfilComponent } from './components/add-auth-perfil/add-auth-perfil.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageAuthComponent,
    ListComponent,
    AddAuthPerfilComponent,
  ],
  exports:[
    MainPageAuthComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class AuthModule { }
