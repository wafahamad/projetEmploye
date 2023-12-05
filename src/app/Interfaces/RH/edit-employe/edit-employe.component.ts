import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css'],
})
export class EditEmployeComponent implements OnInit {
  formModifier!: FormGroup;
  constructor(
    public activeroute: ActivatedRoute,
    public fb: FormBuilder,
    private router: Router,
    public service: EmployeServiceService

  ) {}
  id!:number
  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id']

    this.formModifier = this.fb.nonNullable.group({
      nom: [''],
      prenom: [''],
      poste: [''],
      adresse: [''],
    });
    this.service.getEmpById(this.id).subscribe(data =>{
      this.formModifier = this.fb.nonNullable.group({
        nom: [data.nom],
        prenom: [data.prenom],
        poste: [data.poste],
        adresse: [data.adresse],
      });
    })
  }
  update()
  {
    console.log(this.formModifier.value);
    this.service.updateEmp(this.id,this.formModifier.value).subscribe(data => 
      {
        console.log(data);
        this.router.navigate(['homeRh']);
        
      })
    
  }
  delete()
  {
    console.log(this.formModifier.value);
    this.service.delete(this.id).subscribe(data => 
      {
        console.log(data);
        this.router.navigate(['homeRh']);
        
      })
    
  }
}
