import { Component, Inject } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina.interface';
import { AlertService } from 'src/app/services/alert.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DisciplinaService } from 'src/app/services/backend/disciplina.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent {
  titulo: string = ''
  subTitulo: string = ''

  formData: Disciplina = {
    id: 0,
    nombre: '',
    modalidad: ''
  };

  constructor(
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private disciplinaService: DisciplinaService
  ) {

    if (!data.nuevo) {
      this.cargarInfo(data.body)
    }
    this.cargarTitulo()
  }

    cargarTitulo() {
      if (this.data.nuevo) {
        this.titulo = 'Crear Disciplina'
        this.subTitulo = 'Agregue nuevas disciplinas que oferte el club deportivo.'
      } else {
        this.titulo = 'Actualizar Disciplina'
        this.subTitulo = 'Edite la informacion de las disciplinas actuales en el club deportivo.'
      }
    }

    cargarInfo(body: Disciplina) {
      this.formData = {
        ...body
      };
    }

    guardar(): void {
      if(this.validarDatos()) {
        if(this.data.nuevo){
          
          this.disciplinaService.crearNuevo(this.formData).pipe(catchError( (error) => {
            return throwError( () => error )
          })).subscribe( (response) => {
            window.location.reload()
          })
        }else{
          this.disciplinaService.editar(this.formData, this.formData.id).pipe(catchError( (error) => {
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
      if (!this.formData.nombre || !this.formData.modalidad) {
        this.alert.error('Nombre, modalidad son campos obligatorios.')
        return false;
      }
      return true;
    }
}
