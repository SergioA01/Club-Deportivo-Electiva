import { Component } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina.interface';
import { DisciplinaFormComponent } from '../disciplina-form/disciplina-form.component';
import { ModalService } from 'src/app/services/modal.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';

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
    private dialog: MatDialog
  ) {
    for (let i = 1; i <= 8; i++) {
      const disciplina: Disciplina = {
        id: i,
        nombre: `Deporte ${i}`,
        modalidad: `Presencial ${i}`,
        editar: () => this.editarMiembro(disciplina),
        eliminar: () => this.eliminarMiembro(disciplina)
      };
      this.disciplinas.push(disciplina);
    }
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

  editarMiembro(disciplina: Disciplina): void {
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

  async eliminarMiembro(disciplina: Disciplina) {
    const result = await this.alert.confirm(`¿Estás seguro que deseas eliminar el deporte ${disciplina.nombre} ?`, 'Eliminar')
    if(result.isConfirmed){
      
    }
  }
}
