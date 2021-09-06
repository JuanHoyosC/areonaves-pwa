import { Component, Input} from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { AreonavesService } from '../../services/areonaves.service';

@Component({
  selector: 'app-table-areonaves',
  templateUrl: './table-areonaves.component.html',
  styleUrls: ['./table-areonaves.component.css']
})
export class TableAreonavesComponent {

  @Input() areonaves: any[] = [];
  areonaveSeleccionada: any = {};

  constructor(private _areonaves: AreonavesService, private _alertas: AlertasService) { }


  eliminarAreonave(id: string) {
    this.areonaves = this.areonaves.filter(areonave => areonave.id !== id);
    this._areonaves.eliminarAreonave(id).subscribe( (res: any) => this._alertas.mensajeSuccess(res.msg));
  }


  seleccionarAreonave(areonave: any) {
    this.areonaveSeleccionada = areonave;
  }

}
