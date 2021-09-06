import { Component, OnInit, Input } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { AreonavesService } from '../../services/areonaves.service';

@Component({
  selector: 'app-editar-areonave',
  templateUrl: './editar-areonave.component.html',
  styleUrls: ['./editar-areonave.component.css']
})
export class EditarAreonaveComponent {

  @Input() areonave: any;
  constructor(private _areonaves: AreonavesService, private _alertas: AlertasService) { }



  //Actualiza las areonaves
  actualizarAreonave() {
    this._areonaves.actualizarAreonave(this.areonave.id, this.areonave).subscribe((res: any) => {
      this._alertas.mensajeSuccess(res.msg);
    })
  }

}
