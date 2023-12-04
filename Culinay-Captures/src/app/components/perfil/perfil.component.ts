import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
   // Inject the Router service
   constructor(private router: Router) {}

   // Implement the ngOnInit method
   ngOnInit() {
      // Initialization code if needed
   }
 
   // Method to navigate to the lista-seguidos component
   mostrarSeguidos() {
     this.router.navigate(['/lista-siguiendo']);
     
   }

   mostrarSeguidores() {
    this.router.navigate(['/lista-seguidores']);
   }

   mostrarLike() {
    this.router.navigate(['/lista-like']);
   }
}
