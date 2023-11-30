import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
 // URL de las nuevas imágenes y nombres
 newFriendData = [
  { url: 'https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png', name: 'Patricia Mejia Urbina' },
  { url: 'https://acortar.link/jcJ9zP', name: 'Jose Peres Salazar' },
  { url: 'https://acortar.link/mFT2NC', name: 'Noemi Gutierrez Peña' },
  { url: 'https://acortar.link/rEfnq9', name: 'Luisa Mendoza Vera' },
  { url: 'https://acortar.link/wyehX0', name: 'Jhonatan Cabrera Peña' },
  { url: 'https://acortar.link/HP3Ubl', name: 'Maria Lopez Farro' },
  { url: 'URL_DE_LA_IMAGEN_7', name: 'Nuevo Amigo 7' },
  { url: 'URL_DE_LA_IMAGEN_8', name: 'Nuevo Amigo 8' }
];
}
