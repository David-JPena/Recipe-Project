import { Component } from '@angular/core';


@Component({
  selector: 'app-contenido-principal',
  templateUrl: './contenido-principal.component.html',
  styleUrls: ['./contenido-principal.component.css']
})
export class ContenidoPrincipalComponent {
  items: { image: string, title: string, username: string, detailsId: number }[] = [
    { image: 'assets/images/comida1.jpg', title: 'Comida vegetariana', username: 'Yeraldini Peña', detailsId: 1 },
    { image: 'assets/images/comida2.jpg', title: 'Comida vegetariana', username: 'Yeraldini Peña', detailsId: 2 },
    { image: 'assets/images/imagen3.jpg', title: 'Comida vegetariana', username: 'Yeraldini Peña', detailsId: 3 },
    { image: 'https://acortar.link/XMvZJ2', title: 'Comida Sana para una Vida Saludable', username: 'Rossi Gutierrez', detailsId: 4 },
    { image: 'assets/images/comida5.webp', title:'Comida Sana para una Vida Saludable', username: 'Rossi Gutierrez', detailsId: 5 },
    { image: 'https://img.bekiasalud.com/articulos/portada/50000/50308.jpg', title: 'Comida Sana para una Vida Saludable', username: 'Rossi Gutierrez', detailsId: 6 },
    // Agrega más objetos según sea necesario
  ];
}
