import { Component, Input, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertasService } from 'src/app/services/alertas.service';
import { AreonavesService } from '../../services/areonaves.service';

@Component({
  selector: 'app-table-areonaves',
  templateUrl: './table-areonaves.component.html',
  styleUrls: ['./table-areonaves.component.css']
})
export class TableAreonavesComponent implements OnDestroy{

  @Input() areonaves: any[] = [];
  areonaveSeleccionada: any = {};

  areonaves$: Subscription = new Subscription();

  constructor(private _areonaves: AreonavesService, private _alertas: AlertasService) { }

  //Elimina la subscripción
  ngOnDestroy(): void {
    this.areonaves$.unsubscribe();
  }

  eliminarAreonave(id: string) {
    this.areonaves = this.areonaves.filter(areonave => areonave.id !== id);
   this.areonaves$ =  this._areonaves.eliminarAreonave(id).subscribe( (res: any) => this._alertas.mensajeSuccess(res.msg));
  }


  seleccionarAreonave(areonave: any) {
    this.areonaveSeleccionada = areonave;
  }

}
