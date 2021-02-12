import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatSnackBar,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { Comic } from 'src/app/_model/comic';
import { ComicsService } from 'src/app/_service/comics.service';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})

export class ComicsComponent implements OnInit {
  comics: Comic[];
  public comicsFiltrado = [];
  public comicsTotal = [];
  constructor(
    private comicService: ComicsService,
    private toastrService: ToastrService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.listarComics();
  }

  listarComics() {
    this.comicService.listar().subscribe((data) => {
      this.comics = data;
      if (this.comics !== null && this.comics !== undefined) {
        console.log(data);
        swal.close();
        this.toastrService.success(
          'Proceso generado correctamente!',
          'Atención'
        );
      } else {
        swal.fire(
          'Atención',
          'Problemas para cargar lista de peliculas!',
          'error'
        );
        swal.close();
      }
      console.log(data);
      this.comicsFiltrado = [...this.comics];
      this.comicsTotal = [...this.comics];
    });
  }

  filtrar(event) {
    const busquedaComics =  event.target.value.toString().toLowerCase().trim();
    this.comicsFiltrado = [];
    this.comicsTotal.forEach((item) => {
     if (
     item.nombreComic.toLowerCase().indexOf(busquedaComics) !== -1 ||
     busquedaComics === ''
    ) {
    this.comicsFiltrado.push(item);
    }
    });
    this.comics = this.comicsFiltrado;
  }
}
