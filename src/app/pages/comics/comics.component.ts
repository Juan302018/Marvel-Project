import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSnackBar,
  MatSort,
  MatTableDataSource,
} from "@angular/material";
import { ObjectUnsubscribedError, Observable } from "rxjs";
import { Comic } from "src/app/_model/comic";
import { ComicsService } from "src/app/_service/comics.service";

@Component({
  selector: "app-comics",
  templateUrl: "./comics.component.html",
  styleUrls: ["./comics.component.css"],
})
export class ComicsComponent implements OnInit {
  comics: Comic[];
  public comicsFiltrado = [];
  public comicsTotal = [];
  nomComic: string;
  tomComic: string;
  argComic: string;
  dataSource: MatTableDataSource<Comic>;
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private comicService: ComicsService) {}

  ngOnInit() {
    this.comicService.comicCambio.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.listarComics();
  }

  listarComics() {
    this.comicService.listar().subscribe((data) => {
      this.comics = data;
      console.log(data);
      this.comicsFiltrado = [...this.comics];
      this.comicsTotal = [...this.comics];
    });
  }

  filtrar(valor: string) {
    const busquedaComics = valor.trim().toLowerCase();
    this.comicsFiltrado = [];
    this.comicsTotal.forEach((item) => {
      if (
        item.nombreComic.toLowerCase().indexOf(busquedaComics) !== -1 ||
        busquedaComics === ''
      ) {
        this.comicsFiltrado.push(item);
      }
    });
    // Si no serve lo comentas y dejas sólo el arreglo de Arriba la verdada no entiendo para que ocupas el this.dataSource.filter
    this.dataSource.filter = this.comicsFiltrado.toString(); 
  }
}
