import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DemoRequestService } from '../angular-services/demo-request.service';
import { HttpClient } from '@angular/common/http';
import { DemoRequest } from '../angular-classes/demo-request';
import { Countries } from '../angular-classes/countries';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  closeResult: string;
  demoRequest: DemoRequest = new DemoRequest(); 
  countriesList: string[] = Countries.countriesList;
  constructor(private modalService: NgbModal, private demoRequestService: DemoRequestService) { }

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  sendDemoRequest(newDemoRequest) {
    this.demoRequestService.addDemo(newDemoRequest);
  }
}
