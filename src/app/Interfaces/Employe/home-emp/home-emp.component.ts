import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/Classes/comments';
import { Employe } from 'src/app/Classes/employe';
import { CalandrierService } from 'src/app/Services/calandrier.service';
import { CommentServiceService } from 'src/app/Services/comment-service.service';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexGrid,
} from 'ng-apexcharts';
import { CalendrierEmp } from 'src/app/Classes/calendrier-emp';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  fill: ApexFill;
  legend: ApexLegend;
  grid: ApexGrid;
};

@Component({
  selector: 'app-home-emp',
  templateUrl: './home-emp.component.html',
  styleUrls: ['./home-emp.component.css'],
})
export class HomeEmpComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions = {
    series: [],
    chart: {
      height: 350,
      type: 'rangeBar',
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [['#008FFB', '#00E396']],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: 'top',
      horizontalAlign: 'left',
      customLegendItems: ['Temps passé'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#00E396'],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      tickPlacement: 'on',
    },
    colors: [],
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    public service: EmployeServiceService,
    public calendarS: CalandrierService,
    public formBuilder: FormBuilder,
    public commentService: CommentServiceService
  ) {}
  comments: Comments[] = [];
  employeWeekSummary: CalendrierEmp[] = [];
  heurDep!: Date;
  heurArriv!: Date;
  testSupp: boolean = false;
  testCong: boolean = false;
  id: any;

  employe!: Employe;
  formSupp!: FormGroup;
  formCong!: FormGroup;

  openSupp() {
    this.testSupp = !this.testSupp;
  }
  openCong() {
    this.testCong = !this.testCong;
  }
  AjouterHeureDep() {
    alert(new Date());
    this.calendarS.AjouterHeureDep(this.id).subscribe((data) => {
      this.heurDep = data.heureDep;
      console.log(data);
    });
  }
  AjouterHeureArriv() {
    alert(new Date());
    this.calendarS
      .AjouterHeureArriv(this.id)
      .subscribe((data) => (this.heurArriv = data.heureArriv));
  }

  AjouterHeureCong() {
    this.calendarS
      .AjouterHeureCong(this.id, this.formCong.value['NheurC'])
      .subscribe((data) => {
        console.log(data);
      });
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.service.getEmpById(this.id).subscribe((data) => {
      console.log(data);
      this.employe = data;
      this.calendarS.getDate(this.id).subscribe((data) => {
        this.heurArriv = data.heureArriv;
        this.heurDep = data.heureDep;
      });
    });
    // Call getCommentsByEmployeeId here
    this.commentService.getCommentsByEmployeeId(this.id).subscribe(
      (comments) => {
        console.log('Comments for employee', this.id, ':', comments);
        this.comments = comments;
      },
      (error) => {
        console.error('Error fetching comments:', error);
        // Handle error, show error message, etc.
      }
    );
    this.calendarS.getEmployeSummary(this.id).subscribe((data) => {
      this.employeWeekSummary = data;
      this.chartOptions = {
        ...this.chartOptions,
        series: [
          {
            data: this.employeWeekSummary.map((calendar) => {
              console.log({ calendar });
              return {
                x: new Date(calendar.jour).toLocaleDateString(),
                y: [
                  new Date(calendar.heureArriv).getHours(),
                  new Date(calendar.heureDep).getHours(),
                ],
              };
            }),
          },
        ],
      };
      console.log(this.chartOptions.series);
    });
    this.formSupp = this.formBuilder.group({
      NheurS: ['0'],
    });

    this.formCong = this.formBuilder.group({
      NheurC: ['0'],
    });
  }
}
