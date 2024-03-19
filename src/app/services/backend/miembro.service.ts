import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Miembro } from "src/app/models/miembro.interface";

@Injectable({
    providedIn: 'root'
})
export class MiembroService{

    private baseUrl: string = 'https://club-deportivo-elect-ii-api.onrender.com/api'

    constructor(
        private http: HttpClient,
    ){

    }

    obtenerMiembros():Observable<any>{
        return this.http.get<any>(`${this.baseUrl}/deportistas`)
    }

    eliminarMiembro(id:number){
        return this.http.delete(`${this.baseUrl}/deportistas/${id}`)
    }

    crearNuevo(formData: Miembro):Observable<any>{
        return this.http.post(`${this.baseUrl}/deportistas`,formData)
    }

    editar(formData: Miembro,id:number):Observable<any>{
        return this.http.put(`${this.baseUrl}/deportistas/${id}`,formData)
    }
}