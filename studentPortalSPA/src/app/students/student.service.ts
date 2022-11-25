import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'https://localhost:7227/api/students/'

  constructor(private httpClient : HttpClient) { }

  getStudents(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'getstudents')
  }
}
