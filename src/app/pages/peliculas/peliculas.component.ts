import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { PeliculasService } from 'src/app/_service/peliculas.service';
import { Pelicula } from 'src/app/_model/pelicula';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas:Pelicula[];
  nombrePeli:string;
  argumento:string;
  secuela:boolean;
  dataSource: MatTableDataSource<Pelicula>;

  constructor(private peliculasService: PeliculasService,
    private toastrService: ToastrService, private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.listarPeliculas();
  }
  
  listarPeliculas(){
    this.peliculasService.listar()
    .subscribe(data => {
      this.peliculas = data
      if (this.peliculas !== null && this.peliculas !== undefined) { 
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
      
  });  }

  filtrar(valor:string){
    this.dataSource.filter = valor.trim().toLowerCase();
  }

}
