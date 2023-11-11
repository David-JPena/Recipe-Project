import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido-principal',
  templateUrl: './contenido-principal.component.html',
  styleUrls: ['./contenido-principal.component.css']
})
export class ContenidoPrincipalComponent {
  items: { image: string, title: string, username: string }[] = [
    { image: 'assets/images/comida1.jpg', title: 'Comida vegetariana', username: 'Usuario1' },
    { image: 'assets/images/comida2.jpg', title: 'Comida vegetariana', username: 'Usuario1'  },
    { image: 'assets/images/imagen3.jpg', title: 'Comida vegetariana', username: 'Usuario1'  },

    { image: 'assets/images/comida4.jpg', title: 'Comida vegetariana', username: 'Usuario1'  },
    { image: 'assets/images/comida5.webp', title: 'Comida vegetariana', username: 'Usuario1'  },
    { image: 'assets/images/comida6.jpg', title: 'Comida vegetariana', username: 'Usuario1'  },
    // Agrega más objetos según sea necesario
  ];

}
