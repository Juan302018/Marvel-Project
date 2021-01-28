import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/_model/pelicula';
import { PeliculasService } from 'src/app/_service/peliculas.service';

@Component({
  selector: 'app-peliculadesc',
  templateUrl: './peliculadesc.component.html',
  styleUrls: ['./peliculadesc.component.css']
})
export class PeliculadescComponent implements OnInit {
 pelicula:Pelicula;
  constructor(private peliculasService:PeliculasService) { }

  ngOnInit() {
    this.peliculasService.listarPorId(this.pelicula.idPelicula)
    .subscribe(data => {this.pelicula = data})
  }

}
