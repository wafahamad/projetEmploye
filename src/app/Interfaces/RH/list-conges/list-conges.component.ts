import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/Classes/conge';
import { CongeServiceService } from 'src/app/Services/conge-service.service';

@Component({
  selector: 'app-list-conges',
  templateUrl: './list-conges.component.html',
  styleUrls: ['./list-conges.component.css']
})
export class ListCongesComponent implements OnInit {
  conges!: Conge[];

  constructor(private congeService: CongeServiceService) {}
  ngOnInit() {
    this.congeService.getConges().subscribe((data) => {
      this.conges = data;
    });
  }

  onRejectLeaveRequest(idConge: number): void {
    this.congeService.rejectLeaveRequest(idConge).subscribe(
      response => {
        // Handle success, if needed
        alert('Leave request rejected successfully');
      },
      error => {
        // Handle error, if needed
        console.error('Error rejecting leave request:', error);
        alert('Error rejecting leave request');
      }
    );
  }
  validerConge(idConge: number): void {
    this.congeService.validerConge(idConge).subscribe(
      response => {
        // Handle success, if needed
        alert('Leave request rejected successfully');
      },
      error => {
        // Handle error, if needed
        console.error('Error rejecting leave request:', error);
        alert('Error rejecting leave request ')
      }
    );
  }

}
