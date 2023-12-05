import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/Classes/comments';
import { Employe } from 'src/app/Classes/employe';
import { CalandrierService } from 'src/app/Services/calandrier.service';
import { CommentServiceService } from 'src/app/Services/comment-service.service';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-home-emp',
  templateUrl: './home-emp.component.html',
  styleUrls: ['./home-emp.component.css']
})
export class HomeEmpComponent {
  constructor(private activatedRoute: ActivatedRoute,
     public service: EmployeServiceService,
      public calendarS: CalandrierService,
       public formBuilder: FormBuilder,public commentService:CommentServiceService) { }
       comments: Comments[] = [];
  heurDep!: Date;
  heurArriv!: Date;
  testSupp: boolean = false;
  testCong: boolean = false;
  id: any;

  employe !: Employe;
  formSupp!: FormGroup;
  formCong!: FormGroup;

  openSupp() {
    this.testSupp = !this.testSupp;

  }
  openCong() {
    this.testCong = !this.testCong;

  }
  AjouterHeureDep() {
    alert(new Date())
    this.calendarS.AjouterHeureDep(this.id).subscribe(
      data =>{ this.heurDep = data.heureDep
      console.log(data);
      
      }
    )
  }
  AjouterHeureArriv() {
    alert(new Date())
    this.calendarS.AjouterHeureArriv(this.id).subscribe(
      data => this.heurArriv = data.heureArriv

    )
  }



  AjouterHeureCong() {
    this.calendarS.AjouterHeureCong(this.id, this.formCong.value["NheurC"]).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id);
    this.service.getEmpById(this.id).subscribe(data => {
      console.log(data)
      this.employe = data
      this.calendarS.getDate(this.id).subscribe(
        data=>{
          this.heurArriv=data.heureArriv
          this.heurDep=data.heureDep
        }
      )
    }
    )
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
    this.formSupp = this.formBuilder.group(
      {
        NheurS: ["0"]
      })

    this.formCong = this.formBuilder.group(
      {
        NheurC: ["0"]
      })


  }


}




