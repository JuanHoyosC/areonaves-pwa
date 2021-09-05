import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent {

  @Input() icono: string = '';
  @Input() titulo: string = '';
  @Input() cantidad: number = 0;
  constructor() { }



}
