import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/Classes/employe';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-list-calendrier',
  templateUrl: './list-calendrier.component.html',
  styleUrls: ['./list-calendrier.component.css'],
})
export class ListCalendrierComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public service: EmployeServiceService
  ) {}
  sumhe:number=0
  id!: number;
  employe!: Employe;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getEmpById(this.id).subscribe((data) => {
      console.log(data);
      this.employe = data;
      for(let i =0 ; i<this.employe.calendrier.length;i++)
      {
        this.sumhe=this.sumhe+this.employe.calendrier[i].heureSup
        console.log(this.employe.calendrier[i].heureSup);
        
      }
    });
  }
}
