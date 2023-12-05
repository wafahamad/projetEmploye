import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../Classes/comments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  private apiUrl = 'http://localhost:3001/employees';
  constructor(private http: HttpClient) {}

  createComment(employeeId: number, comment: Comments): Observable<Comment> {
    const url = `${this.apiUrl}/${employeeId}/comments`;
    return this.http.post<Comment>(url, comment);
  }

  getCommentsByEmployeeId(employeeId: number): Observable<Comments[]> {
    const url = `${this.apiUrl}/${employeeId}/comments`;
    return this.http.get<Comments[]>(url);
  }
}
