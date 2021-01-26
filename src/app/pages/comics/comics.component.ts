import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ComicsService } from 'src/app/_service/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicService:ComicsService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
