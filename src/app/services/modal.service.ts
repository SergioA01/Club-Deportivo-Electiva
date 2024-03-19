import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  createModal<T>(component: ComponentType<T>, data: any)  {
    const dialogRef = this.dialog.open(component, {
      data: data,
      backdropClass: 'default-modal-backdrop',
      panelClass: 'default-modal-container',
      width: '1200px',
    });
    return dialogRef.afterClosed();
  }
}
