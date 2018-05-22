import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DemoRequestService } from '../angular-services/demo-request.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  closeResult: string;
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
