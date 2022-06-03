import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BorrarComponent } from './borrar/borrar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent }, 
  { path: 'Listar', component: ListarComponent }, 
  { path: 'Crear', component: CrearComponent }, 
  { path: 'Borrar', component: BorrarComponent }, 
  { path: 'Modificar', component: ModificarComponent }, 
  { path: '**', component: Pagina404Component }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
