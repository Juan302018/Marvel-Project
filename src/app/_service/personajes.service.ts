import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { SuperHeroe } from "../_model/superHerore";

@Injectable({
  providedIn: "root",
})
export class PersonajesService {

  PersonajeCambio = new Subject<SuperHeroe[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/superHeroe`;

  constructor(private http: HttpClient) {}

  listar(): Observable<SuperHeroe[]> {
    return this.http
      .get<SuperHeroe[]>(this.url)
      .pipe(
        map((superheroes) =>
          superheroes.sort((a, b) => a.nombreSuperHeroe.localeCompare(b.nombreSuperHeroe))
        )
      );
  }

  listarPorId(idSuperHeroe: number): Observable<SuperHeroe> {
    return this.http.get<SuperHeroe>(`${this.url}/${idSuperHeroe}`);
  }
}
