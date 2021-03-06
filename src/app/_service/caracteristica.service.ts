import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Caracteristica } from "../_model/caracteristica";

@Injectable({
  providedIn: "root",
})
export class CaracteristicaService {

  CaracteriristicaCambio = new Subject<Caracteristica[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/caracteristica`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Caracteristica[]> {
    return this.http.get<Caracteristica[]>(this.url);
  }

  listarPorId(idCaracteristica: number): Observable<Caracteristica> {
    return this.http.get<Caracteristica>(`${this.url}/${idCaracteristica}`);
  }
}
