import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PeliculasService } from 'src/app/_service/peliculas.service';
import { Pelicula } from 'src/app/_model/pelicula';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas:Pelicula[];
  constructor(private peliculasService: PeliculasService,public snackBar: MatSnackBar) { }
  ngOnInit() {
    this.listarPeliculas();
  }
  
  listarPeliculas(){
    this.peliculasService.listar()
    .subscribe(data => {this.peliculas = data})  }


}
