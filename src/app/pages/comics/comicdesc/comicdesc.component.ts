import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Comic } from 'src/app/_model/comic';
import { ComicsService } from 'src/app/_service/comics.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-comicdesc',
  templateUrl: './comicdesc.component.html',
  styleUrls: ['./comicdesc.component.css']
})
export class ComicdescComponent implements OnInit {

  comic: Comic;
  form: FormGroup;
  constructor(private comicsService: ComicsService,private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.comic = new Comic();
    this.form = new FormGroup({
     nombre: new FormControl(''),
     tomo: new FormControl(''),
     argumento: new FormControl('')
    })
  }
  insertarComic() {

    this.comic.nombreComic = this.form.value['nombre'];
    this.comic.tomoComic = this.form.value['tomo'];
    this.comic.argumentoComic = this.form.value['argumento'];
    this.comicsService.registrar(this.comic).pipe(switchMap(() => {
      return this.comicsService.listar();
    })).subscribe(data => {
      this.comicsService.comicCambio.next(data);
      this.comicsService.mensajeCambio.next("Se registró un comic");
    });
  this.router.navigate(['comics']);
}
  }

