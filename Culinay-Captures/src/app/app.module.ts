import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EncabezadoComponent,
    ContenidoPrincipalComponent,
    PieDePaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
