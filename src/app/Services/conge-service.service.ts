import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conge } from '../Classes/conge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeServiceService {

  private apiUrl = 'http://localhost:3001/DemandeConge';

  constructor(private http: HttpClient) {}

  getConges(): Observable<Conge[]> {
    return this.http.get<Conge[]>(`${this.apiUrl}/leave-requests`); // Assurez-vous que l'URL correspond à votre backend
  }

  getCongeById(id: number): Observable<Conge> {
    return this.http.get<Conge>(`${this.apiUrl}/leave-requests/${id}`); // Assurez-vous que l'URL correspond à votre backend
  }

createLeaveRequest(employeeId: number, data: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/${employeeId}/leave-request`, data);
}
  updateConge(id: number, conge: Conge): Observable<Conge> {
    return this.http.patch<Conge>(`${this.apiUrl}/leave-requests/${id}`, conge);
  }

  deleteConge(id: number): Observable<Conge> {
    return this.http.delete<Conge>(`${this.apiUrl}/leave-requests/${id}`);
  }

  validerConge(idConge: number): Observable<Conge> {
    return this.http.patch<Conge>(`${this.apiUrl}/accept-leave-request/${idConge}`, {});
  }

  rejectLeaveRequest(idConge: number): Observable<any> {
    const url = `${this.apiUrl}/reject-leave-request/${idConge}`;
    return this.http.patch(url, {});
  }
}
