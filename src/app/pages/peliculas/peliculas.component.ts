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
  public pelisFiltrado =[];
  public pelisTotal =[];

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
      this.pelisFiltrado = [...this.peliculas];
      this.pelisTotal = [...this.peliculas];
  });  }

  filtrar(event){
    const busquedaPelis = event.target.value.toString().toLowerCase().trim();
    this.pelisFiltrado = [];
    this.pelisTotal.forEach((item) => {
      if (item.nombrePelicula.toLowerCase().indexOf(busquedaPelis) !== -1 || busquedaPelis=== '') 
      {
        this.pelisFiltrado.push(item);
  }
});
   this.peliculas = this.pelisFiltrado;
}
}
