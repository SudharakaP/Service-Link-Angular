import { Component, OnInit } from '@angular/core';
import { faUniversalAccess, faPaperPlane, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  faUniversalAccess = faUniversalAccess;
  faPaperPlane = faPaperPlane;
  faPeopleCarry = faPeopleCarry;
}
