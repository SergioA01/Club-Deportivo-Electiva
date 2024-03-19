import { Component, Inject } from '@angular/core';
import { Evento } from 'src/app/models/evento.interface';
import { AlertService } from 'src/app/services/alert.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EventoService } from 'src/app/services/backend/evento.service';
import { catchError, throwError } from 'rxjs';

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
    fecha: new Date()
  };

  constructor(
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventoService: EventoService
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
      ...body,
      fecha: new Date(body.fecha)
    };
  }

  guardar(): void {
    if(this.validarDatos()) {
      if(this.data.nuevo){
        
        this.eventoService.crearNuevo(this.formData).pipe(catchError( (error) => {
          return throwError( () => error )
        })).subscribe( (response) => {
          window.location.reload()
        })
      }else{
        this.eventoService.editar(this.formData, this.formData.id).pipe(catchError( (error) => {
          return throwError( () => error )
        })).subscribe( (response) => {
          window.location.reload()
        })
      }
    }
    // Aquí puedes manejar la lógica para guardar los datos del formulario
    console.log('Datos del formulario:', this.formData);
  }

  validarDatos(): boolean {
    // Validar nombre, modalidad como campos obligatorios
   if (!this.formData.nombre || !this.formData.fecha) {
     this.alert.error('Nombre, fecha son campos obligatorios.')
     return false;
   }
   return true;
 }
}
