import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema(elemento: any) {
    console.log(elemento.checked)
    const theme = elemento.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

}
