import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-like',
  templateUrl: './lista-like.component.html',
  styleUrls: ['./lista-like.component.css']
})
export class ListaLikeComponent {

  constructor(private router: Router) {}

  redirectToPerfil() {
    this.router.navigate(['/perfil']);
  }
}
