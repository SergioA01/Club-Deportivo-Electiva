import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult, SweetAlertOptions } from 'sweetalert2'
const defaultClassConfigs = {
  customClass: {
    container: 'default-modal-containert-swal'
  },
  showClass: {
    backdrop: 'default-modal-backdrop'
  }
}

const defaultCancelButtonConfigs = {
  showCancelButton: true,
  cancelButtonText: 'Cancelar',
  confirmButtonColor: '#8ac926',
  cancelButtonColor: '#c1121f',
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  public async success(text: string, title: string = '¡Excelente!'): Promise<SweetAlertResult<any>> {

    const opts: SweetAlertOptions = {
      ...defaultClassConfigs,
      icon: 'success',
      title: title,
      text: text,
      timer: 3000,
      showConfirmButton: false,
    }

    return Swal.fire(opts);
  }

  public async confirm(text: string, confirmButtonText: string = 'Aceptar'): Promise<SweetAlertResult<any>> {

    const opts: SweetAlertOptions = {
      ...defaultClassConfigs,
      ...defaultCancelButtonConfigs,
      icon: 'warning',
      text: text,
      confirmButtonText: confirmButtonText,
    }

    return Swal.fire(opts)
  }

  public async error(text: string): Promise<SweetAlertResult<any>> {

    const opts: SweetAlertOptions = {
      ...defaultClassConfigs,
      icon: 'error',
      text: text,
      timer: 3000,
    }

    return Swal.fire(opts)
  }

  public async errorWithCheck(text: string, confirmButtonText: string = 'Aceptar') : Promise<SweetAlertResult<any>> {

    const opts: SweetAlertOptions = {
      ...defaultClassConfigs,
      icon: 'error',
      text: text,
      confirmButtonColor: '#8ac926',
      confirmButtonText: confirmButtonText,
    }

    return Swal.fire(opts)
  }
}
