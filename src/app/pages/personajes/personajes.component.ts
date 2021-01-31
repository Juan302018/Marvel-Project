import { Component, OnInit } from "@angular/core";
import { HeroesEnum } from "src/app/Enum/heroes.enum";
import { SuperHeroe } from "src/app/_model/superHerore";
import { PersonajesService } from "src/app/_service/personajes.service";
import { } from "rxjs/operators";
import swal from "sweetalert2";

@Component({
  selector: "app-personajes",
  templateUrl: "./personajes.component.html",
  styleUrls: ["./personajes.component.css"],
})
export class PersonajesComponent implements OnInit {
  constructor(private personajesService: PersonajesService) {}

  dataSH: SuperHeroe[];
  arrayBusHereo = [];
  arrayHereoTotal = [];

  id: number;
  idSH: number;
  nombreSH: string;

  ngOnInit() {
    this.listarPersonajes();
  }

  listarPersonajes() {
    this.personajesService.listar().subscribe((p) => {
      this.dataSH = p;
      this.dataSH.forEach((sh) => {
        console.log("sh: ", sh);
        this.nombreSH = sh.nombreSuperHeroe;
        console.log("nombreSH: ", this.nombreSH);
      });
      this.arrayHereoTotal.push(this.dataSH);
    });
  }

  onSelectChange(evento: any) {
    this.id = evento.value;
    if (this.id !== null && this.id !== undefined) {
      this.SuperHeroeSel(this.id);
      this.personajesService.listarPorId(this.idSH).subscribe({
        next: heroes => console.log({ heroes })
      });
    } else {
      swal.fire(
        'Atención',
        'Problemas para cargar la lista de información!',
        'error'
      );
      swal.close();
    }
  }

  filtrar(evento) {
    const busquedaHeroe = evento.target.value.toString().toLowerCase().trim();
    this.arrayBusHereo = [];
    this.arrayHereoTotal.forEach(h => {
      if (h.nombreSuperHeroe.toLowerCase().indexOf(busquedaHeroe) !== -1) {
        this.arrayBusHereo.push(h);
      }
    });
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
    return this.idSH;
  }
}
