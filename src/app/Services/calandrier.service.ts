import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../Classes/employe';
import { CalendrierEmp } from '../Classes/calendrier-emp';

const URL: string = 'http://localhost:3001/calendar';
@Injectable({
  providedIn: 'root',
})
export class CalandrierService {
  constructor(private http: HttpClient) {}
  AjouterHeureArriv(id: number): Observable<CalendrierEmp> {
    return this.http.post<CalendrierEmp>(URL + '/ajouterHeureArriv/' + id, {});
  }
  AjouterHeureDep(id: number): Observable<CalendrierEmp> {
    return this.http.post<CalendrierEmp>(URL + '/ajouterHeureDep/' + id, {});
  }

  AjouterHeureCong(id: number, heur: number): Observable<CalendrierEmp> {
    return this.http.post<CalendrierEmp>(
      URL + '/modifierHeureConge/' + id,
      heur
    );
  }
  getDate(id: number): Observable<CalendrierEmp> {
    return this.http.get<CalendrierEmp>(URL + '/getcalendrier/' + id);
  }

  getEmployeSummary(id: number): Observable<CalendrierEmp[]> {
    return this.http.get<CalendrierEmp[]>(URL + '/summary/' + id);
  }

  /* Suivreperformance: async (employeId: number, date: Date) => {
    const calendarEntry = await CalendrierEmp.findOne({ where: { employeId, jour: date } });
    if (!calendarEntry) {
      return 0;
    }
    const performance =
      (calendarEntry.heureArriv.getHours() * 60 + calendarEntry.heureArriv.getMinutes()) -
      (calendarEntry.heureDep.getHours() * 60 + calendarEntry.heureDep.getMinutes()) +
      calendarEntry.heureSup -
      calendarEntry.heureConge;

    return performance;
  }*/
}
