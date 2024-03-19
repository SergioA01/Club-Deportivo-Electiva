import { Component, Inject } from '@angular/core';
import { Evento } from 'src/app/models/evento.interface';
import { AlertService } from 'src/app/services/alert.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent {

  titulo = '';
  subTitulo = '';
  formData: Evento = {
    id: 0,
    nombre: '',
    descripcion: '',
    fecha: new Date()
  };

  constructor(
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if (!data.nuevo) {
      this.cargarInfo(data.body)
    }
    this.cargarTitulo()
  }

  cargarTitulo() {
    if (this.data.nuevo) {
      this.titulo = 'Crear Evento'
      this.subTitulo = 'Agregue nuevos eventos en los que haya participado el club deportivo.'
    } else {
      this.titulo = 'Actualizar Disciplina'
      this.subTitulo = 'Edite la informacion de los eventos en los que haya participado el club deportivo.'
    }
  }

  cargarInfo(body: Evento) {
    this.formData = {
      ...body
    };
  }

  guardar(): void {
    // Aquí puedes manejar la lógica para guardar los datos del formulario
    console.log('Datos del formulario:', this.formData);
  }

}
