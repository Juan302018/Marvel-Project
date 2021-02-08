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
 form: FormGroup;
  constructor(private peliculasService:PeliculasService,private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
   this.pelicula = new Pelicula();
   this.form = new FormGroup({
    nombre: new FormControl(''),
    secuela: new FormControl(true?'si':'no'),
    argumento: new FormControl('')
   })
  }
  insertarPeliculas(){

    this.pelicula.nombrePelicula = this.form.value['nombre'];
    this.pelicula.esSecuela = this.form.value['tomo'];
    this.pelicula.argumentoPelicula = this.form.value['argumento'];
    this.peliculasService.registrar(this.pelicula).pipe(switchMap(() => {
      return this.peliculasService.listar();
    })).subscribe(data => {
      this.peliculasService.PelculaCambio.next(data);
      this.peliculasService.mensajeCambio.next("Se registró una pelicula");
    });
  this.router.navigate(['peliculas']);
}

}
