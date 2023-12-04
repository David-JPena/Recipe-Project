import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-receta',
  templateUrl: './registrar-receta.component.html',
  styleUrls: ['./registrar-receta.component.css']
})
export class RegistrarRecetaComponent {
  receta: any = {};
  imagenSeleccionada: string = '';
  categorias: string[] = ['Selecciona una categoría', 'Desayunos', 'Almuerzos', 'Cenas', 'Vegetariano', 'Postres', 'Bebidas'];
  ingredientes: string[] = [];
  pasos: string[] = [];
  nuevoIngrediente: string = '';
  nuevoPaso: string = '';

  seleccionarImagen(): void {
    const input = document.getElementById('imagenInput') as HTMLInputElement;
    const file = (input.files as FileList)[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSeleccionada = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  agregarElemento(titulo: string): void {
    let nuevoElemento = '';
    if (titulo === 'Ingrediente' && this.nuevoIngrediente.trim() !== '') {
      nuevoElemento = this.nuevoIngrediente.trim();
      this.ingredientes.push(nuevoElemento);
      this.nuevoIngrediente = ''; // Limpiar el campo después de agregar
    } else if (titulo === 'Paso' && this.nuevoPaso.trim() !== '') {
      nuevoElemento = this.nuevoPaso.trim();
      this.pasos.push(nuevoElemento);
      this.nuevoPaso = ''; // Limpiar el campo después de agregar
    }
  }

  publicarReceta(): void {
    if (
      this.imagenSeleccionada &&
      this.receta.titulo &&
      this.receta.procedencia &&
      this.receta.personas > 0 &&
      this.receta.tiempo > 0 &&
      this.receta.categoria !== this.categorias[0] &&
      this.ingredientes.length > 0 &&
      this.pasos.length > 0
    ) {
      console.log('Receta publicada:', this.receta);
      this.receta = {};
      this.imagenSeleccionada = '';
      this.ingredientes = [];
      this.pasos = [];
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}