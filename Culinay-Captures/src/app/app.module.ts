import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ContenidoPrincipalComponent } from './components/contenido-principal/contenido-principal.component';
import { PieDePaginaComponent } from './components/pie-de-pagina/pie-de-pagina.component';
import { RegistrarRecetaComponent } from './components/registrar-receta/registrar-receta.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';
import { AddAmigosComponent } from './components/add-amigos/add-amigos.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EncabezadoComponent,
    ContenidoPrincipalComponent,
    PieDePaginaComponent,
    RegistrarRecetaComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    PerfilComponent,
    EditPerfilComponent,
    AddAmigosComponent,
    BuscadorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
   
    
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
