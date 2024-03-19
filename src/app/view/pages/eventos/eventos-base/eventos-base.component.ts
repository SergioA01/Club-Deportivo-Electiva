import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento.interface';
import { MatDialog } from '@angular/material/dialog';
import { EventosFormComponent } from '../eventos-form/eventos-form.component';
import { AlertService } from 'src/app/services/alert.service';
import { EventoService } from 'src/app/services/backend/evento.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-eventos-base',
  templateUrl: './eventos-base.component.html',
  styleUrls: ['./eventos-base.component.css']
})
export class EventosBaseComponent {
  eventos: Evento[] = [];
  terminoBusqueda: string = '';

  constructor(
    private dialog: MatDialog,
    private alert: AlertService,
    private eventoService: EventoService
  ) {
    this.cargarlista()
  }

  cargarlista(){
    this.eventoService.obtenerEventos().pipe(catchError( (error) => {
      return throwError( () => error )
    })).subscribe( (response) => {
      this.eventos = response.data
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(EventosFormComponent, {
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

  editarEvento(evento: Evento): void {
    const dialogRef = this.dialog.open(EventosFormComponent, {
      width: '1000px',
      data: {
        nuevo:false,
        body:evento
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  async eliminarEvento(evento: Evento){
    const result = await this.alert.confirm(`¿Estás seguro que deseas eliminar la participacion en ${evento.nombre} ?`, 'Eliminar')
    if(result.isConfirmed){
      this.eventoService.eliminarEvento(evento.id).pipe(catchError( (error) => {
        return throwError( () => error )
       })).subscribe( (response) => {
        window.location.reload()
       })  
    }
  }
}
