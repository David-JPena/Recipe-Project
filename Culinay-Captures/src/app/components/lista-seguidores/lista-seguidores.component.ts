import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-seguidores',
  templateUrl: './lista-seguidores.component.html',
  styleUrls: ['./lista-seguidores.component.css']
})
export class ListaSeguidoresComponent implements OnInit {

  // Inyecta el servicio Router en el constructor
  constructor(private router: Router) {}

  ngOnInit() {
    // Initialization code if needed
  }

  mostrarSeguidos() {
    this.router.navigate(['/lista-siguiendo']);
  }
}
