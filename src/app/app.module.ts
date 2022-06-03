import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/data.service';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    BorrarComponent,
    Pagina404Component,
    BienvenidaComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
