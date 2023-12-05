import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/Classes/employe';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-home-rh',
  templateUrl: './home-rh.component.html',
  styleUrls: ['./home-rh.component.css']
})
export class HomeRhComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public service: EmployeServiceService,
    public router: Router
  ) {}
  employes!:Employe[];

    selectEmployeEdit(id : number){

      this.router.navigate(['/editeEmploye',id]);
      
    }
    selectEmployePerforming(id : number){

      this.router.navigate(['/performingEmp',id]);
      
    }
    commentEmploye(id : number){

      this.router.navigate(['/comment',id]);
      
    }

  ngOnInit(): void {
    this.service.AfficherEmp().subscribe(data => {
      this.employes=data
    })
  }

}
