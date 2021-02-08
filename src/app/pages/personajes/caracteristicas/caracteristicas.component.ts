import { Component, OnInit } from '@angular/core';
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

  public caracHeroe: Caracteristica;

  private listaIdCaracteristicasSupcription: Subscription;

  ngOnInit() {
  }

  listarCaracteristicaPorId(id: number) {
    this.listaIdCaracteristicasSupcription = this.caracteristicaService.listarPorId(id).subscribe(data => {
      this.caracHeroe = data;
    });
  }

}
