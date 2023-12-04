import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { ContenidoPrincipalComponent } from './components/contenido-principal/contenido-principal.component';
import { RegistrarRecetaComponent } from './components/registrar-receta/registrar-receta.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';
import { AddAmigosComponent } from './components/add-amigos/add-amigos.component';
import { ListaSeguidoresComponent } from './components/lista-seguidores/lista-seguidores.component';
import { ListaSiguiendoComponent } from './components/lista-siguiendo/lista-siguiendo.component';
import { ListaLikeComponent } from './components/lista-like/lista-like.component';

const routes: Routes = [
  { path: '', component: ContenidoPrincipalComponent },
  { path: 'registrar-receta', component: RegistrarRecetaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'edit-perfil', component: EditPerfilComponent },
  { path: 'contenido-principal', component: ContenidoPrincipalComponent },
  { path: 'details/: id', component: DetailsComponent },
  { path: 'add-amigos', component: AddAmigosComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '', redirectTo: '/details', pathMatch: 'full' },
  { path: 'lista-siguiendo', component: ListaSiguiendoComponent },
  { path: 'lista-seguidores', component: ListaSeguidoresComponent },
  { path: 'lista-like', component: ListaLikeComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
