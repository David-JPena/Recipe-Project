import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent {
  profile: any = {
    name: '',
    email: '',
    description: ''
  };

  onSave(): void {
    console.log('Perfil guardado:', this.profile);
  }

  
}
