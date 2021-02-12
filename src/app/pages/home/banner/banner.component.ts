import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  imagen: string[] = ['assets/img/banner/bannerSuperHeroes.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
