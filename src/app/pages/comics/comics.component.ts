import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ObjectUnsubscribedError } from "rxjs";
import { Comic } from "src/app/_model/comic";
import { ComicsService } from "src/app/_service/comics.service";

@Component({
  selector: "app-comics",
  templateUrl: "./comics.component.html",
  styleUrls: ["./comics.component.css"],
})
export class ComicsComponent implements OnInit {

  comics: Comic[];

  constructor(
    private comicService: ComicsService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.listarComics();
  }

  listarComics() {
    this.comicService.listar().subscribe(data => {
      this.comics = data;
    });
  }
}
