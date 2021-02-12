import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/_model/pelicula';
import { PeliculasService } from 'src/app/_service/peliculas.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-peliculadesc',
  templateUrl: './peliculadesc.component.html',
  styleUrls: ['./peliculadesc.component.css']
})
export class PeliculadescComponent implements OnInit {
 pelicula:Pelicula;
 idPelicula:number;
 form: FormGroup;
  constructor(private peliculasService:PeliculasService,private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.encontrar(this.idPelicula);
  }
  encontrar(idPeli:number){
   this.peliculasService.encontrarPorId(this.idPelicula)
   .subscribe(data => {
    let id = data.idPelicula;
    let nombre = data.nombrePelicula;
    let secuela = data.esSecuela;
    let argumento = data.argumentoPelicula;
    this.form = new FormGroup({
    'id':new FormControl(id),
    'nombre':new FormControl(nombre),
    'secuela':new FormControl(secuela),
    'argumento':new FormControl(argumento)
    });
   });
  }

}
