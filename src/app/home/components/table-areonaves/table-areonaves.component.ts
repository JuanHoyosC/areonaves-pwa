import { Component, Input} from '@angular/core';
import { AreonavesService } from '../../services/areonaves.service';

@Component({
  selector: 'app-table-areonaves',
  templateUrl: './table-areonaves.component.html',
  styleUrls: ['./table-areonaves.component.css']
})
export class TableAreonavesComponent {

  @Input() areonaves: any[] = [];
  areonaveSeleccionada: any = {};

  constructor(private _areonaves: AreonavesService) { }





  eliminarAreonave(id: string) {
    this.areonaves = this.areonaves.filter(areonave => areonave.id !== id);
    //this._areonaves.eliminarareonave(id).subscribe( res => console.log(res));
  }

  actualizarAreonave(areonave: any) {
   // this._areonaves.actualizarareonave(areonave).subscribe( res => console.log(res), error => console.log);
  }

  seleccionarAreonave(areonave: any) {
    this.areonaveSeleccionada = areonave;
  }


}
