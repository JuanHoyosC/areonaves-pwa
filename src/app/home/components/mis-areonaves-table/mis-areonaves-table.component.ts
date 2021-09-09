import { Component,  Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertasService } from 'src/app/services/alertas.service';
import { AreonavesService } from '../../services/areonaves.service';

@Component({
  selector: 'app-mis-areonaves-table',
  templateUrl: './mis-areonaves-table.component.html',
  styleUrls: ['./mis-areonaves-table.component.css']
})
export class MisAreonavesTableComponent implements OnDestroy{

  @Input() areonaves: any[] = [];
  @Output() liberarEvent: EventEmitter<any> = new EventEmitter();

  areonaves$: Subscription = new Subscription();
  constructor(private _areonaves: AreonavesService, private _alertas: AlertasService) { }

  //Elimina la subscripción
  ngOnDestroy(): void {
    this.areonaves$.unsubscribe();
  }

  //Libera la areonave
  liberarAreonave(id: string) {
    this.areonaves = this.areonaves.map(areonave => (areonave.id === id) ? ({ ...areonave, reservado: false }) : areonave);
    this.areonaves$ = this._areonaves.devolverAreonave(id).subscribe((res: any) => this._alertas.mensajeSuccess(res.msg));
    this.liberarEvent.emit(id);
  }

}
