import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { DemoRequest } from '../angular-interfaces/demo-request';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class DemoRequestService {

  constructor(private http: HttpClient) { }

  addDemo (demoRequest: DemoRequest): Observable<DemoRequest> {
    return this.http.post<DemoRequest>('/demo', demoRequest, httpOptions)
      .pipe(
        //catchError(this.handleError('addDemo', demoRequest))
      );
  }
}
