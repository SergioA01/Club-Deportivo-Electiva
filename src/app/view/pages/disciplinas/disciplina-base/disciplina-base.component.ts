import { Component } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina.interface';
import { MatDialog } from '@angular/material/dialog';
import { DisciplinaFormComponent } from '../disciplina-form/disciplina-form.component';
import { AlertService } from 'src/app/services/alert.service';
import { DisciplinaService } from 'src/app/services/backend/disciplina.service'
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-disciplina-base',
  templateUrl: './disciplina-base.component.html',
  styleUrls: ['./disciplina-base.component.css']
})
export class DisciplinaBaseComponent {
  disciplinas: Disciplina[] = [];
  terminoBusqueda: string = '';

  constructor(
    private alert:AlertService,
    private dialog: MatDialog,
    private disciplinaService: DisciplinaService
  ) {
    this.cargarlista()
  }

  cargarlista(){
    this.disciplinaService.obtenerDisciplinas().pipe(catchError( (error) => {
      return throwError( () => error )
    })).subscribe( (response) => {
      this.disciplinas = response.data
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(DisciplinaFormComponent, {
      width: '1000px',
      data:{
        nuevo:true,
        body:null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  editarDisciplina(disciplina: Disciplina): void {
    const dialogRef = this.dialog.open(DisciplinaFormComponent, {
      width: '1000px',
      data: {
        nuevo:false,
        body:disciplina
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  async eliminarDisciplina(disciplina: Disciplina) {
    const result = await this.alert.confirm(`¿Estás seguro que deseas eliminar el deporte ${disciplina.nombre} ?`, 'Eliminar')
    if(result.isConfirmed){
     this.disciplinaService.eliminarDisciplina(disciplina.id).pipe(catchError( (error) => {
      return throwError( () => error )
     })).subscribe( (response) => {
      window.location.reload()
     }) 
    }
  }
}
