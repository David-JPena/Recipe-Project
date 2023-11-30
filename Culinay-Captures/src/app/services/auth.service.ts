import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';  


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3000/api/auth'; // Reemplaza con la URL de tu servidor de autenticación

  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private username: string = '';
  

  constructor(private http: HttpClient, private router: Router) {} 

  setAuthenticated(value: boolean): void {
    this.isAuthenticated.next(value);
    localStorage.setItem('authenticated', value ? 'true' : 'false');
  }
  setUsername(username: string): void {
    this.username = username;
  }
  getAuthenticated(): Observable<boolean> {
    const storedValue = localStorage.getItem('authenticated');
    const initialValue = storedValue ? storedValue === 'true' : false;
    this.isAuthenticated.next(initialValue);
    return this.isAuthenticated.asObservable();
  }
  getUsername(): string {
    return this.username;
  }

  logout(): void {
    this.isAuthenticated.next(false);
    this.username = ''; // Limpiar información relacionada con el usuario si es necesario
    localStorage.removeItem('authenticated'); // Limpiar el estado almacenado en localStorage
  }

  // Método para iniciar sesión
  login(credentials: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, credentials);
  }

  // Método para registrar usuario
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, user);
  }

  

  // Puedes agregar más métodos según tus necesidades (por ejemplo, cambiar contraseña, recuperar contraseña, etc.)
}
