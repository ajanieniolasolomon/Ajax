import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }
  public chartType:string = 'line';
        
  public chartDatasets:Array<any> = [
      {data: [70,70, 60, 59, 0, 53, 30], label: '2018'},
      {data: [28, 44, 40, 31, 26, 74, 82], label: '2017'}
  ];

  public chartLabels:Array<any> = ['Angular5', 'Firebase', 'Apollo & Graphql', 'Node js', 'Mongo db', 'Mysql', 'Php'];

  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      },
      {
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions:any = { 
      responsive: true
  };

  public chartClicked(e: any): void { 
       
  } 
  
  public chartHovered(e: any): void { 
       
  }

}
