import { Component, OnInit } from '@angular/core';
import {faPhone, faEnvelope, faLocationArrow} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationArrow = faLocationArrow;
}
