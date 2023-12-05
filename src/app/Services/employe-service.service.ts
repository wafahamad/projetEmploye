import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../Classes/employe';

const URL: string = 'http://localhost:3001/employees'

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  constructor(private http: HttpClient) { }

  AfficherEmp():Observable<Employe[]>{
    return this.http.get<Employe[]>(URL);
  }
  updateEmp(id:number,emp:Employe):Observable<Employe>{
    return this.http.put<Employe>(URL+"/"+id,emp);
  }

  getEmpById(id:number):Observable<Employe>{
    return this.http.get<Employe>(URL+"/"+id)
  } 
  login(email: string, password: string): Observable<any> {
    const data = {email: email, password:password };
    return this.http.post<any>(URL + "/login", data);
  }
  delete(id:number,): Observable<any> {

    return this.http.delete<Employe>(URL+"/"+id);
  }

  register(userDetails: any): Observable<Employe> {
    return this.http.post<Employe>(URL + "/register", userDetails);
  }
}
