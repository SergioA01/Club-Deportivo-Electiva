import { Component, Inject } from '@angular/core';
import { Miembro } from 'src/app/models/miembro.interface';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';
import { MiembroService } from 'src/app/services/backend/miembro.service';
import { DisciplinaService } from 'src/app/services/backend/disciplina.service';
import { catchError, throwError } from 'rxjs';
import { Disciplina } from 'src/app/models/disciplina.interface';

@Component({
  selector: 'app-administrar-miembros',
  templateUrl: './administrar-miembros.component.html',
  styleUrls: ['./administrar-miembros.component.css']
})
export class AdministrarMiembrosComponent {
  miembros: Miembro[] = [];
  miembrosExternos: Miembro[] = [];

  constructor(
    private dialog:MatDialog,
    private alert: AlertService,
    private miembroService: MiembroService,
    @Inject(MAT_DIALOG_DATA) public data: Disciplina,
    private disciplinaService: DisciplinaService
  ) {
    this.cargarlista()
    this.cargarlistaExternos()
  }

  cargarlista(){
    this.disciplinaService.obtenerMiembrosDisciplina(this.data.id).pipe(catchError((error) => {
      return throwError(() => error)
    })).subscribe((response) => {
      console.log( response )
      this.miembros = response.data
    })
  }

  cargarlistaExternos(){
    this.miembroService.obtenerMiembros().pipe(catchError((error) => {
      return throwError(() => error)
    })).subscribe((response) => {
      
      console.log( response )
      const miembrosFiltrado = response.data.filter( (miembro: { disciplinaId: number; }) => miembro.disciplinaId === this.data.id );
      console.log('filtrado: ', miembrosFiltrado);
      this.miembrosExternos = response.data.filter
    })
  }

  async eliminarMiembro(miembro: Miembro) {
    const result = await this.alert.confirm(`¿Estás seguro que deseas eliminar a ${miembro.nombre} ?`, 'Eliminar')
    if(result.isConfirmed){
      this.miembroService.eliminarMiembro(miembro.id).pipe(catchError((error) => {
        return throwError(() => error)
      })).subscribe((response) => {
        window.location.reload()
      })
    }
  }
}
