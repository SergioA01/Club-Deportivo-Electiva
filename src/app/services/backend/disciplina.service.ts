import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Disciplina } from "src/app/models/disciplina.interface";

@Injectable({
    providedIn: 'root'
})
export class DisciplinaService{

    private baseUrl: string = 'https://club-deportivo-elect-ii-api.onrender.com/api'

    constructor(
        private http: HttpClient,
    ){

    }

    obtenerDisciplinas():Observable<any>{
        return this.http.get<any>(`${this.baseUrl}/disciplinas`)
    }

    eliminarDisciplina(id:number){
        return this.http.delete(`${this.baseUrl}/disciplinas/${id}`)
    }

    crearNuevo(formData: Disciplina):Observable<any>{
        let {id, ...formSinId} = formData;
        return this.http.post(`${this.baseUrl}/disciplinas`,formSinId)
    }

    editar(formData: Disciplina,id:number):Observable<any>{
        return this.http.put(`${this.baseUrl}/disciplinas/${id}`,formData)
    }

    obtenerMiembrosDisciplina(id:number):Observable<any>{
        return this.http.get<any>(`${this.baseUrl}/disciplinas/afiliados/${id}`)
    }

    // agregarMiembros():
}