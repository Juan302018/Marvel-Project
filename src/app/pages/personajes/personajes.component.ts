import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesEnum } from 'src/app/Enum/heroes.enum';
import { SuperHeroe } from 'src/app/_model/superHerore';
import { PersonajesService } from 'src/app/_service/personajes.service';
import {ToastrService} from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import Swiper from 'swiper';
import swal from 'sweetalert2';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit, OnDestroy {
  constructor(
    private personajesService: PersonajesService,
    private toastrService: ToastrService) {}

  public dataSH: SuperHeroe[];
  public arrayBusHereo = [];
  public arrayHeroeFiltrado = [];
  public arrayHeroeTotal = [];

  public volver: boolean = false;

  public id: number;
  public idSH: number;
  public heroeSel: SuperHeroe;
  public nombreSH: string;
  public imgSel: string;

  private listarHeroesSupcription: Subscription;
  private listaIdHeroeSupcription: Subscription;

  ngOnInit() {
    this.imgSel = '';
    this.listarPersonajes();
  }

  listarPersonajes() {
    this.listarHeroesSupcription = this.personajesService.listar().pipe(take(1)).subscribe((p) => {
      this.dataSH = p;
      console.log('data', this.dataSH);
    /*  this.dataSH.forEach((sh) => {
        console.log('sh: ', sh);
        this.nombreSH = sh.nombreSuperHeroe;
        console.log('nombreSH: ', this.nombreSH);
      }); */
      this.arrayHeroeFiltrado = [... this.dataSH];
      this.arrayHeroeTotal = [... this.dataSH];
    });
  }

  listarPorIdHeroe(id: number) {
    this.listaIdHeroeSupcription = this.personajesService.listarPorId(this.idSH).pipe(take(1)).subscribe(heroes => {
        this.heroeSel = heroes;
    });
  }

  onSelectChange(evento: any) {
    this.id = evento.value;
    if (this.id !== null && this.id !== undefined) {
      this.SuperHeroeSel(this.id);
      swal.close();
      this.toastrService.success('Proceso generado correctamente!', 'Atención');
    } else {
      swal.fire(
        'Atención',
        'Problemas para cargar lista de personajes!',
        'error'
      );
      swal.close();
    }
  }

  filtrar(evento) {
    const busquedaHeroe = evento.target.value.toString().toLowerCase().trim();

    this.arrayHeroeFiltrado = [];
    this.arrayHeroeTotal.forEach(item => {
      if (item.nombreSuperHeroe.toLowerCase().indexOf(busquedaHeroe) !== -1 ||
      busquedaHeroe === ''
      ) {
        this.arrayHeroeFiltrado.push(item);
      }
    });
  }

  retroceder() {
    this.volver = false;
  }

  SuperHeroeSel(id: number): any {
    let img = '';

    switch (id) {
      case HeroesEnum.Iron_Man:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_1.jpg';
        break;

      case HeroesEnum.Thor:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_2.jpg';
        break;

      case HeroesEnum.Hulk:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_3.jpg';
        break;

      case HeroesEnum.Vision:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_4.jpg';
        break;

      case HeroesEnum.Black_Widow:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_5.jpg';
        break;

      case HeroesEnum.War_Machine:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_6.jpg';
        break;

      case HeroesEnum.Falcon:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_7.jpg';
        break;

      case HeroesEnum.Black_Panter:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_8.jpg';
        break;

      case HeroesEnum.Ant_Man:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_9.jpg';
        break;

      case HeroesEnum.Spider_Man:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_10.jpg';
        break;

      case HeroesEnum.Winter_Soldier:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_11.jpg';
        break;

      case HeroesEnum.Capitan_America:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_12.jpg';
        break;

      case HeroesEnum.Wanda_Maximoff:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_13.jpg';
        break;

      case HeroesEnum.Doctor_Strange:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_14.jpg';
        break;

      case HeroesEnum.Capitan_Marvel:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_15.jpg';
        break;

      case HeroesEnum.Wolverine:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_16.jpg';
        break;

      case HeroesEnum.La_Mole:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_17.jpg';
        break;

      case HeroesEnum.La_Antorcha_Humana:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_18.jpg';
        break;

      case HeroesEnum.La_Mujer_Invisible:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_19.jpg';
        break;

      case HeroesEnum.El_Hombre_Elastico:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_20.jpg';
        break;

      case HeroesEnum.Ciclope:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_21.jpg';
        break;

      case HeroesEnum.Tormenta:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_22.jpg';
        break;

      case HeroesEnum.Jean_Grey:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_23.jpg';
        break;

      case HeroesEnum.Profesor_X:
        this.idSH = id;
        img = 'assets/img/mediumBody/md_24.jpg';
        break;

      default:
        break;
    }
    if (this.idSH !== null && this.idSH !== undefined) {
      this.imgSel = img;
    }
    this.listarPorIdHeroe(this.idSH);
  }

  ngOnDestroy(): void {
    if (this.listarHeroesSupcription) {
      this.listarHeroesSupcription.unsubscribe();
    }
    if (this.listaIdHeroeSupcription) {
      this.listaIdHeroeSupcription.unsubscribe();
    }
  }

}
