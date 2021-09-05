import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {

  image: string = 'sun';
  constructor() { }

  ngOnInit(): void {
    const modo = localStorage.getItem('darkmode') || 'light';
    this.escogerModo(modo);
  }

  cambiarTema(elemento: any) {
    const modo = elemento.checked ? 'dark' : 'light';
    this.escogerModo(modo);
    localStorage.setItem('darkmode', modo);
  }

  escogerModo(modo: string) {
    this.image = modo === 'dark' ? 'moon' : 'sun';
    document.documentElement.setAttribute('data-theme', modo);
  }

}
