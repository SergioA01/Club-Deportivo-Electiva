import { Component } from '@angular/core';
import { Miembro } from 'src/app/models/miembro.interface';
import { MatDialog } from '@angular/material/dialog';
import { MiembrosFormComponent } from '../miembros-form/miembros-form.component';
import { AlertService } from 'src/app/services/alert.service';
import { MiembroService } from 'src/app/services/backend/miembro.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-miembros-base',
  templateUrl: './miembros-base.component.html',
  styleUrls: ['./miembros-base.component.css']
})
export class MiembrosBaseComponent {

  miembros: Miembro[] = [];
  terminoBusqueda: string = '';

  constructor(
    private dialog:MatDialog,
    private alert: AlertService,
    private miembroService: MiembroService
  ) {
    /* for (let i = 1; i <= 8; i++) {
      const miembro: Miembro = {
        id: i,
        nombre: `Nombre ${i}`,
        apellido: `Apellido ${i}`,
        documento: `Documento ${i}`,
        nacimiento: new Date('1990-01-01'),
        telefono: `Teléfono ${i}`,
        correo: `correo${i}@example.com`,
        editar: () => this.editarMiembro(miembro),
        eliminar: () => this.eliminarMiembro(miembro)
      };
      this.miembros.push(miembro);
    } */
    this.cargarlista()
  }

  cargarlista(){
    this.miembroService.obtenerMiembros().pipe(catchError((error) => {
      return throwError(() => error)
    })).subscribe((response) => {
      
      this.miembros = response.data
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(MiembrosFormComponent, {
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

  editarMiembro(miembro: Miembro): void {
    const dialogRef = this.dialog.open(MiembrosFormComponent, {
      width: '1000px',
      data: {
        nuevo:false,
        body:miembro
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
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
