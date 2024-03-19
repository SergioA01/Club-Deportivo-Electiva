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
  selectedMiembro: number = 0;

  constructor(
    private dialog:MatDialog,
    private alert: AlertService,
    private miembroService: MiembroService,
    @Inject(MAT_DIALOG_DATA) public data: Disciplina,
    private disciplinaService: DisciplinaService
  ) {
    console.log(data);
    
    this.cargarlista()
  }

  cargarlista(){
    this.disciplinaService.obtenerMiembrosDisciplina(this.data.id).pipe(catchError((error) => {
      return throwError(() => error)
    })).subscribe((response) => {
      this.miembros = response.data
      this.cargarlistaExternos()
    })
  }

  agregarMiembro(){
    console.log("entro al metodo");
    this.disciplinaService.agregarMiembros(this.data.id,this.selectedMiembro).pipe(catchError((error) => {
      return throwError(() => error)
    })).subscribe((response) => {
      console.log(response);
      this.cargarlista()
      this.cargarlistaExternos
    })
  }

  cargarlistaExternos(){
    this.miembroService.obtenerMiembros().pipe(catchError((error) => {
      return throwError(() => error)
    })).subscribe((response) => {
      this.miembrosExternos = response.data.filter((miembro:Miembro) => {
        // Filtrar los elementos de response que no están en miembros
        return !this.miembros.some(m => m.id === miembro.id); // Aquí debes reemplazar 'id' por el campo que usas para comparar los elementos
      });
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
