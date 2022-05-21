import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo'

  @Input('labels') public  doughnutChartLabels: string[] = [ 'label1', 'label2', 'label3' ];
  
  
  @Input('data')  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };
  
}
