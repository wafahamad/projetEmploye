import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demission } from '../Classes/demission';

@Injectable({
  providedIn: 'root'
})
export class DemissionServiceService {

  private api='http://localhost:3001/employees';
  constructor(private http: HttpClient) {}
  createDemission(employeeId: number, data: any): Observable<any> {
    const url = `${this.api}/${employeeId}/demissions`;
    return this.http.post<any>(url, { employeeId, data });
  }
  getDemissions(): Observable<Demission[]> {
    return this.http.get<Demission[]>(`${this.api}/demssions`); // Assurez-vous que l'URL correspond à votre backend
  }
  approveDemission(employeeId: number, demissionId: number): Observable<Demission> {
    const url = `${this.api}/${employeeId}/demissions/${demissionId}/approve`;
    return this.http.post<Demission>(url, {});
  }

  rejectDemission(employeeId: number, demissionId: number): Observable<Demission> {
    const url = `${this.api}/${employeeId}/demissions/${demissionId}/reject`;
    return this.http.post<Demission>(url, {});
  }
}
