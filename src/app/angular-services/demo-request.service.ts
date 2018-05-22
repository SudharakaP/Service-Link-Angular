import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { DemoRequest } from '../angular-interfaces/demo-request';

@Injectable()
export class DemoRequestService {

  constructor(private http: HttpClient) { }

  addDemo(demoRequest: DemoRequest) {
    let httpHeaders = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/demo', demoRequest).subscribe();
  }
}
