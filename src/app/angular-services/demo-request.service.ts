import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { DemoRequest } from '../angular-classes/demo-request';
import { NgModel } from '@angular/forms';

@Injectable()
export class DemoRequestService {

  constructor(private http: HttpClient) { }

  addDemo(demoRequest: NgModel) {
    let httpHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
    let demoRequestObject: DemoRequest = demoRequest.value;
    let name: string = demoRequestObject.name;
    let company: string = demoRequestObject.company;
    let email: string = demoRequestObject.email;
    let country: string = demoRequestObject.country;

    return this.http.post('/demo', {"name": name, "company": company, "email": email, "country": country}).subscribe();
  }
}
