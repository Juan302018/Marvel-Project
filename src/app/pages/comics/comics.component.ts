import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from "@angular/material";
import { ObjectUnsubscribedError, Observable } from "rxjs";
import { Comic } from "src/app/_model/comic";
import { ComicsService } from "src/app/_service/comics.service";
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: "app-comics",
  templateUrl: "./comics.component.html",
  styleUrls: ["./comics.component.css"],
})

export class ComicsComponent implements OnInit {
  comics: Comic[];
  nomComic: string;
  tomComic: string;
  argComic: string;
  dataSource:MatTableDataSource<Comic>;
 // @ViewChild(MatPaginator,{static:true})
 // paginator:MatPaginator;
 // @ViewChild(MatSort,{static:true}) sort: MatSort;
  constructor(
    private comicService: ComicsService,
    private toastrService: ToastrService, private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.comicService.comicCambio.subscribe(data =>{
    this.dataSource  = new MatTableDataSource(data);
   // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
      });
    this.listarComics();
  }

  listarComics() {
    this.comicService.listar().subscribe((data) => {
      this.comics = data;
      if (this.comics !== null && this.comics !== undefined) { 
        console.log(data);
          swal.close();
          this.toastrService.success('Proceso generado correctamente!', 'Atención');
        } else {
          swal.fire(
            'Atención',
            'Problemas para cargar lista de peliculas!',
            'error'
          );
          swal.close();
        }
      console.log(data);
     
    });
  }

  filtrar(valor:string){
    this.dataSource.filter = valor.trim().toLowerCase();
  }
}
