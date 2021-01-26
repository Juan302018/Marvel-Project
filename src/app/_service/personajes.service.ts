import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHeroe } from '../_model/superHerore';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

   PersonajeCambio = new Subject<SuperHeroe[]>();
   mensajeCambio = new Subject<string>();
  url: string = `${environment.HOST}/superheroe`;
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<SuperHeroe[]>(this.url);
  }
  listarPorId(idSuperHeroe:number){
    return this.http.get<SuperHeroe>(`${this.url}/${idSuperHeroe}`);
  }
}
