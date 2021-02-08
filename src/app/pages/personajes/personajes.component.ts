import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesEnum } from 'src/app/Enum/heroes.enum';
import { SuperHeroe } from 'src/app/_model/superHerore';
import { PersonajesService } from 'src/app/_service/personajes.service';
import {ToastrService} from 'ngx-toastr';
import { } from 'rxjs/operators';
import { Subscription } from 'rxjs';
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
  public nombreSH: string;

  private listarHeroesSupcription: Subscription;
  private listaIdHeroeSupcription: Subscription;

  ngOnInit() {
    this.listarPersonajes();
  }

  listarPersonajes() {
    this.listarHeroesSupcription = this.personajesService.listar().subscribe((p) => {
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
    this.listaIdHeroeSupcription = this.personajesService.listarPorId(this.idSH).subscribe({
      next: heroes => console.log({ heroes })
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

  SuperHeroeSel(id: number) {
    switch (id) {
      case HeroesEnum.Iron_Man:
        this.idSH = id;
        break;

      case HeroesEnum.Thor:
        this.idSH = id;
        break;

      case HeroesEnum.Hulk:
        this.idSH = id;
        break;

      case HeroesEnum.Vision:
        this.idSH = id;
        break;

      case HeroesEnum.Black_Widow:
        this.idSH = id;
        break;

      case HeroesEnum.War_Machine:
        this.idSH = id;
        break;

      case HeroesEnum.Falcon:
        this.idSH = id;
        break;

      case HeroesEnum.Black_Panter:
        this.idSH = id;
        break;

      case HeroesEnum.Ant_Man:
        this.idSH = id;
        break;

      case HeroesEnum.Spider_Man:
        this.idSH = id;
        break;

      case HeroesEnum.Winter_Soldier:
        this.idSH = id;
        break;

      case HeroesEnum.Capitan_America:
        this.idSH = id;
        break;

      case HeroesEnum.Wanda_Maximoff:
        this.idSH = id;
        break;

      case HeroesEnum.Doctor_Strange:
        this.idSH = id;
        break;

      case HeroesEnum.Capitan_Marvel:
        this.idSH = id;
        break;

      case HeroesEnum.Wolverine:
        this.idSH = id;
        break;

      case HeroesEnum.La_Mole:
        this.idSH = id;
        break;

      case HeroesEnum.La_Antorcha_Humana:
        this.idSH = id;
        break;

      case HeroesEnum.La_Mujer_Invisible:
        this.idSH = id;
        break;

      case HeroesEnum.El_Hombre_Elastico:
        this.idSH = id;
        break;

      case HeroesEnum.Ciclope:
        this.idSH = id;
        break;

      case HeroesEnum.Tormenta:
        this.idSH = id;
        break;

      case HeroesEnum.Jean_Grey:
        this.idSH = id;
        break;

      case HeroesEnum.Profesor_X:
        this.idSH = id;
        break;

      default:
        break;
    }
    const heroeSel = this.idSH;
    this.listarPorIdHeroe(heroeSel);
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
