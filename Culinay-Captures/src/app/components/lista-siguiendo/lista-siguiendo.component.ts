// lista-siguiendo.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-siguiendo',
  templateUrl: './lista-siguiendo.component.html',
  styleUrls: ['./lista-siguiendo.component.css']
})
export class ListaSiguiendoComponent {

  usuarios = [
    { nombre: 'José Vega Maldonado', imagen: 'https://goo.su/PnJkwI1', siguiendo: true },
    { nombre: 'Patricia Mejia Urbina', imagen: 'https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png', siguiendo: false },
    { nombre: 'Yulissa Vera Farro', imagen: 'https://goo.su/dMEUB', siguiendo: true },
    { nombre: 'Patricia Mejia Urbina', imagen: 'https://goo.su/dMEUB', siguiendo: false },
    { nombre: 'Lander Corrales Cortina', imagen: 'https://goo.su/e4eLK3', siguiendo: true },
    { nombre: 'Norley Cotrina Moentenegro', imagen: 'https://goo.su/hxGJf', siguiendo: false },
    { nombre: 'Lionel Messi Cabrera', imagen: 'https://acortar.link/koedn4', siguiendo: true },
    { nombre: 'David Jimenes Espinoza', imagen: 'https://goo.su/jm6GkgT', siguiendo: false },
    { nombre: 'Yuria Rodriguez Zabala', imagen: 'https://goo.su/A7zGu', siguiendo: false },

  ];

  seguir(index: number) {
    console.log(`Siguiendo a ${this.usuarios[index].nombre}`);
    this.usuarios[index].siguiendo = true;
  }

  dejarDeSeguir(index: number) {
    console.log(`Dejando de seguir a ${this.usuarios[index].nombre}`);
    this.usuarios[index].siguiendo = false;
  }
}
