import { Component, OnInit } from '@angular/core';
import { Demission } from 'src/app/Classes/demission';
import { DemissionServiceService } from 'src/app/Services/demission-service.service';

@Component({
  selector: 'app-list-demission',
  templateUrl: './list-demission.component.html',
  styleUrls: ['./list-demission.component.css']
})
export class ListDemissionComponent implements OnInit {
demissions!:Demission[];
constructor(private demissionService:DemissionServiceService){}
  ngOnInit(): void {
    this.demissionService.getDemissions().subscribe((data) => {
      this.demissions = data;
    });
  }
  approveDemission(employeeId :number,demissionId:number): void {
    this.demissionService.approveDemission(employeeId, demissionId).subscribe(
      (response) => {
        console.log('Demission approved successfully:', response);
        // Handle success
      },
      (error) => {
        console.error('Error approving demission:', error);
        // Handle error
      }
    );
  }

  rejectDemission(employeeId :number,demissionId:number): void {
    this.demissionService.rejectDemission(employeeId, demissionId).subscribe(
      (response) => {
        console.log('Demission rejected successfully:', response);
        // Handle success
      },
      (error) => {
        console.error('Error rejecting demission:', error);
        // Handle error
      }
    );
  }
}
