import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comic } from '../_model/comic';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  comicCambio = new Subject<Comic[]>();
  mensajeCambio = new Subject<string>();
  url: string = `${environment.HOST}/comic`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Comic[]>(this.url)
    .pipe(map((comics) =>
    comics.sort((a, b) => a.nombreComic.localeCompare(b.nombreComic))
    )
      );
  }
  encontrarPorId(idComic:number){
    return this.http.get<Comic>(`${this.url}/${idComic}`);
    }

}
