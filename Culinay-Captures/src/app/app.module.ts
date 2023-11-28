import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
