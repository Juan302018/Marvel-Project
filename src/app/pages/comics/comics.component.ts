import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Comic } from 'src/app/_model/comic';
import { ComicsService } from 'src/app/_service/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
 comics:Comic[];
 nomComic:string;
 tomComic:string;
 argComic:string;
 dataSource = new Array();
  constructor(private comicService:ComicsService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.listarComics();
  }

   listarComics(){
     this.comicService.listar()
     .subscribe(data => {
    this.comics.forEach(lista =>{
      this.nomComic = lista.nombreComic;
      this.tomComic = lista.tomoComic;
      this.argComic = lista.argumentoComic;
    });
    this.comics = data
});
}
filtrar(event){
  const texto = event.target.value.toString().toLowerCase().trim();
  this.comics = [];
  this.dataSource = this.comics;
  this.dataSource.filter = texto;
}
}
