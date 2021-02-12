import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Caracteristica } from 'src/app/_model/caracteristica';
import { CaracteristicaService } from 'src/app/_service/caracteristica.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  constructor(
    private caracteristicaService: CaracteristicaService,
    private toastrService: ToastrService
  ) { }

  @Output() envioVolver = new EventEmitter();

  public caracHeroe: Caracteristica;

  private listaIdCaracteristicasSupcription: Subscription;

  ngOnInit() {
    // Recibir parametro por el router navegate y el sessionStorage la imagem
    // this.listarCaracteristicaPorId();
  }

  listarCaracteristicaPorId(id: number) {
    this.listaIdCaracteristicasSupcription = this.caracteristicaService.listarPorId(id).subscribe(data => {
      this.caracHeroe = data;
    });
  }

  volver() {
    this.envioVolver.emit();
  }

}
