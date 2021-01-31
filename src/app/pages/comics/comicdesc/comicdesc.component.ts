import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/_model/comic';
import { ComicsService } from 'src/app/_service/comics.service';

@Component({
  selector: 'app-comicdesc',
  templateUrl: './comicdesc.component.html',
  styleUrls: ['./comicdesc.component.css']
})
export class ComicdescComponent implements OnInit {

  comic: Comic;

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.encontrarComic();
  }
  encontrarComic() {
       this.comicsService.listarPorId(this.comic.idComic)
       .subscribe(data => {
         this.comic = data;
      });
  }
}
