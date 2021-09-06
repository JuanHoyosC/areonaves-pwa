import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {

  icono: string = 'fa-lightbulb';
  constructor(ElementRef: ElementRef) { 
    this.darkRef = ElementRef;
  }

  @ViewChild('darkMode', {static: true}) darkRef: ElementRef;

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
    console.log(this.darkRef.nativeElement.checked)
    this.icono = modo === 'dark' ? 'fa-moon' : 'fa-lightbulb';
    this.darkRef.nativeElement.checked = modo === 'dark' ? true : false;
    document.documentElement.setAttribute('data-theme', modo);
  }

}
