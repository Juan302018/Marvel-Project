import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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

  listar():Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.url)
    .pipe(map((peliculas) =>
    peliculas.sort((a, b) => a.nombrePelicula.localeCompare(b.nombrePelicula))
    )
      );
  }
  

}
