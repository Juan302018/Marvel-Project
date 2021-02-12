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
  idComic:number;
  form: FormGroup;
  constructor(private comicsService: ComicsService,private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.encontrar(this.idComic);
  }
  encontrar(id:number){
    this.comicsService.encontrarPorId(this.idComic).subscribe(data => {
     let id = data.idComic;
     let nombre = data.nombreComic;
     let tomo = data.tomoComic;
     let argumento = data.argumentoComic;
     this.form = new FormGroup({
     'id':new FormControl(id),
    'nombre':new FormControl(nombre),
    'tomo':new FormControl(tomo),
    'argumento':new FormControl(argumento)
    });
    });
  }
   
  }

