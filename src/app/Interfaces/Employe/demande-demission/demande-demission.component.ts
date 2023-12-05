import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/Classes/employe';
import { DemissionServiceService } from 'src/app/Services/demission-service.service';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-demande-demission',
  templateUrl: './demande-demission.component.html',
  styleUrls: ['./demande-demission.component.css']
})
export class DemandeDemissionComponent implements OnInit {
  id: any;
  employe!: Employe;
  demissionForm!: FormGroup; // Use FormGroup for form handling

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: EmployeServiceService,
    private demissionService: DemissionServiceService,
    private fb: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

    this.service.getEmpById(this.id).subscribe((data) => {
      console.log(data);
      this.employe = data;
    });

    this.initForm();
  }

  // Initialize form using FormBuilder
  initForm(): void {
    this.demissionForm = this.fb.group({
      date: [new Date(), Validators.required],
      reason: ['', Validators.required],
      statut: ['pending', Validators.required],
    });
  }


  submitDemission() {
   
      const employeeId = this.id; 
      if (this.demissionForm.valid) {
      const demissionData = { 
       
          ...this.demissionForm.value,
          employeeId: this.id, // Include employeeId in the data
        }; 
      this.demissionService.createDemission(employeeId, demissionData).subscribe(
        (result) => {
          console.log('Demission request submitted successfully:', result);
          // You may want to navigate to a different page or show a success message
        },
        (error) => {
          console.error('Error submitting demission request:', error);
          // Handle error, show error message, etc.
        }
      );
    }
  }

}
