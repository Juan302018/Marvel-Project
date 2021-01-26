import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../_model/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  PelculaCambio = new Subject<Pelicula[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/pelicula`;
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pelicula[]>(this.url);
  }

  listarPorId(idPelicula:number){
    return this.http.get<Pelicula>(`${this.url}/${idPelicula}`);
  }

}
