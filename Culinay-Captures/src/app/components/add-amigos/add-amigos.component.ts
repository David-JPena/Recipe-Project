import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-amigos',
  templateUrl: './add-amigos.component.html',
  styleUrls: ['./add-amigos.component.css']
})
export class AddAmigosComponent {

  // Inyecta el servicio Router en el constructor
  constructor(private router: Router) {}

  mostrarSeguidos() {
    this.router.navigate(['/lista-siguiendo']);
  }

}
