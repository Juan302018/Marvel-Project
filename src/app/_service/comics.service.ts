import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comic } from '../_model/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  ComicCambio = new Subject<Comic[]>();
  mensajeCambio = new Subject<string>();
  url: string = `${environment.HOST}/comic`;
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Comic[]>(this.url);
  }
  listarPorId(idComic:number){
    return this.http.get<Comic>(`${this.url}/${idComic}`);
  }

}
