// registrar-usuario.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent {
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {
    const user = { nombre: this.nombre, apellidos: this.apellidos, correo: this.correo, contrasena: this.contrasena };

    this.authService.register(user).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);

        // Redirige a la página principal (home) con un mensaje en la URL
        this.router.navigate(['/'], { queryParams: { registroExitoso: true } });
      },
      (error) => {
        console.error('Error al registrar usuario', error);
      }
    );
  }
}