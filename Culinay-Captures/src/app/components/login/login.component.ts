import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';
  ShowPassword: boolean = false; // Agregado

  constructor(private authService: AuthService, private router: Router) {}

  loginUser() {
    const credentials = { correo: this.correo, contrasena: this.contrasena };

    this.authService.login(credentials).subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso', response);

        this.authService.setAuthenticated(true);
        this.authService.setUsername(response.username);

        this.router.navigate(['']);
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }

  toggleShowPassword() {
    this.ShowPassword = !this.ShowPassword;
  }
}