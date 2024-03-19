import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Evento } from "src/app/models/evento.interface"; 

@Injectable({
    providedIn: 'root'
})
export class EventoService{

    private baseUrl: string = 'https://club-deportivo-elect-ii-api.onrender.com/api'

    constructor(
        private http: HttpClient,
    ){

    }

    obtenerEventos():Observable<any>{
        return this.http.get<any>(`${this.baseUrl}/eventos`)
    }

    eliminarEvento(id:number){
        return this.http.delete(`${this.baseUrl}/eventos/${id}`)
    }

    crearNuevo(formData: Evento):Observable<any>{
        let {id, ...formSinId} = formData;
        return this.http.post(`${this.baseUrl}/eventos`,formSinId)
    }

    editar(formData: Evento,id:number):Observable<any>{
        return this.http.put(`${this.baseUrl}/eventos/${id}`,formData)
    }
}