import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  // Doughnut
  @Input('label') public doughnutChartLabels: Label[] = [];
  @Input('data') public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  
  @Input() titulo: string = '';
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }
}
