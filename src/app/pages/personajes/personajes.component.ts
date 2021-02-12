import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SuperHeroe } from 'src/app/_model/superHerore';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PersonajesService } from 'src/app/_service/personajes.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';
import { HeroesEnum } from 'src/app/Enum/heroes.enum';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit, OnDestroy {

  public dataSH: SuperHeroe[] = [];
  public arrayHeroeFiltrado = [];
  public arrayHeroeTotal = [];

  public volver: boolean = false;
  public validador: boolean = false;
  public listaHeroes: SuperHeroe;
  public heroeSel: SuperHeroe;
  public id: number;
  public idSH: number;
  public imgSel: string;

  private listarHeroesSupcription: Subscription;
  private listaIdHeroeSupcription: Subscription;

  dataSource: MatTableDataSource<SuperHeroe>;
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private personajesService: PersonajesService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit() {
    this.personajesService.PersonajeCambio.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.imgSel = '';
    this.listarPersonajes();
  }

  listarPersonajes() {
    this.validador = false;
    this.listarHeroesSupcription = this.personajesService
      .listar()
      .pipe(take(1))
      .subscribe(
        (p) => {
          p.filter(
            (datos) =>
              datos.nombreSuperHeroe !== null && datos.idSuperHeroe > -1
          );
          this.dataSH = [];
          if (p.length > -1) {
            this.validador = true;
            p.forEach(l => {
             l.superHeroe = this.obtenerImgHeroes(l.superHeroe);
            });
            this.dataSH = p;
          } else {
            swal.fire(
              'Atención',
              'No se ha ejecutado la información correctamente!.',
              'error'
            );
          }
          this.arrayHeroeFiltrado = [...this.dataSH];
          this.arrayHeroeTotal = [...this.dataSH];
        },
        (err) => {
          console.error('Error: ', err);
        }
      );
  }

  private obtenerImgHeroes(heroe: string): string {
    let image = '';
    if (heroe === 'iron man') {
      image = 'assets/img/fullFace/f_1.jpg';
    } else if (heroe === 'thor') {
      image = 'assets/img/fullFace/f_2.jpg';
    } else if (heroe === 'hulk') {
      image = 'assets/img/fullFace/f_3.jpg';
    } else if (heroe === 'vision') {
      image = 'assets/img/fullFace/f_4.jpg';
    } else if (heroe === 'black widow') {
      image = 'assets/img/fullFace/f_5.jpg';
    } else if (heroe === 'war machine') {
      image = 'assets/img/fullFace/f_6.jpg';
    } else if (heroe === 'falcon') {
      image = 'assets/img/fullFace/f_7.jpg';
    } else if (heroe === 'black panter') {
      image = 'assets/img/fullFace/f_8.jpg';
    } else if (heroe === 'ant man') {
      image = 'assets/img/fullFace/f_9.jpg';
    } else if (heroe === 'spider man') {
      image = 'assets/img/fullFace/f_10.jpg';
    } else if (heroe === 'winter soldier') {
      image = 'assets/img/fullFace/f_11.jpg';
    } else if (heroe === 'capitan america') {
      image = 'assets/img/fullFace/f_12.jpg';
    } else if (heroe === 'wanda maximoff') {
      image = 'assets/img/fullFace/f_13.jpg';
    } else if (heroe === 'doctor strange') {
      image = 'assets/img/fullFace/f_14.jpg';
    } else if (heroe === 'capitan marvel') {
      image = 'assets/img/fullFace/f_15.jpg';
    } else if (heroe === 'wolverine') {
      image = 'assets/img/fullFace/f_16.jpg';
    } else if (heroe === 'la mole') {
      image = 'assets/img/fullFace/f_17.jpg';
    } else if (heroe === 'la antorcha humana') {
      image = 'assets/img/fullFace/f_18.jpg';
    } else if (heroe === 'la mujer invisible') {
      image = 'assets/img/fullFace/f_19.jpg';
    } else if (heroe === 'el hombre elastico') {
      image = 'assets/img/fullFace/f_20.jpg';
    } else if (heroe === 'ciclope') {
      image = 'assets/img/fullFace/f_21.jpg';
    } else if (heroe === 'tormenta') {
      image = 'assets/img/fullFace/f_22.jpg';
    } else if (heroe === 'jean grey') {
      image = 'assets/img/fullFace/f_23.jpg';
    } else if (heroe === 'profesor x') {
      image = 'assets/img/fullFace/f_24.jpg';
    }
    return image;
  }

  listarPorIdHeroe(id: number) {
    this.listaIdHeroeSupcription = this.personajesService
      .listarPorId(this.idSH)
      .pipe(take(1))
      .subscribe((heroes) => {
        this.heroeSel = heroes;
      });
  }

  onSelectChange(evento: any) {
    this.id = evento.value.filter(
      (data) =>
        data.nombreSuperHeroe !== null && data.nombreSuperHeroe !== undefined
    );
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
    this.arrayHeroeTotal.forEach((item) => {
      if (
        item.nombreSuperHeroe.toLowerCase().indexOf(busquedaHeroe) !== -1 ||
        busquedaHeroe === ''
      ) {
        this.arrayHeroeFiltrado.push(item);
      }
      this.dataSH = this.arrayHeroeFiltrado;
    });
  }

  retroceder(event) {
    if (event) {
      this.volver = event;
    }
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
