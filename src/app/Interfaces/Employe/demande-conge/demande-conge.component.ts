import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/Classes/employe';
import { CongeServiceService } from 'src/app/Services/conge-service.service';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit{
  demandeCongeForm!: FormGroup;
  id: any;

  employe !: Employe;
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,public service: EmployeServiceService, private congeService: CongeServiceService) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id);
    this.service.getEmpById(this.id).subscribe(data => {
      console.log(data)
      this.employe = data
    }
    )
    this.initForm();
  }

  initForm(): void {
    this.demandeCongeForm = this.fb.group({
      startDate: [, Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  createLeaveRequest() {
    const employeeId = this.id; 
    if (this.demandeCongeForm.valid) {
    const leaveRequestData = { 
     
        ...this.demandeCongeForm.value,
        employeeId: this.id, // Include employeeId in the data
      }; 
  
    this.congeService.createLeaveRequest(employeeId, leaveRequestData).subscribe(
      (response) => {
        console.log('Leave request created successfully:', response);
        // Handle the response or update your component as needed
      },
      (error) => {
        console.error('Error creating leave request:', error);
        // Handle errors
      }
    );
    };
  }

}
