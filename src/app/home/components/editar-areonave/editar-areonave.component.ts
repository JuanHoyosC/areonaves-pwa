import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertasService } from 'src/app/services/alertas.service';
import { AreonavesService } from '../../services/areonaves.service';

@Component({
  selector: 'app-editar-areonave',
  templateUrl: './editar-areonave.component.html',
  styleUrls: ['./editar-areonave.component.css']
})
export class EditarAreonaveComponent implements OnDestroy{

  @Input() areonave: any;

  areonaves$: Subscription = new Subscription();
  constructor(private _areonaves: AreonavesService, private _alertas: AlertasService) { }


  //Limpia la subscripción
  ngOnDestroy(): void {
    this.areonaves$.unsubscribe();
  }

  //Actualiza las areonaves
  actualizarAreonave() {
    this.areonaves$ = this._areonaves.actualizarAreonave(this.areonave.id, this.areonave).subscribe((res: any) => {
      this._alertas.mensajeSuccess(res.msg);
    })
  }

}
