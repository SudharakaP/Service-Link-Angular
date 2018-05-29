import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { DemoRequestService } from '../angular-services/demo-request.service';
import { HttpClient } from '@angular/common/http';
import { DemoRequest } from '../angular-classes/demo-request';
import { Countries } from '../angular-classes/countries';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  private closeResult: string;
  private modalRef: NgbModalRef;
  private demoRequest: DemoRequest = new DemoRequest();
  private defaultCountry: string = 'United States';
  private countriesList: string[] = Countries.countriesList;
  constructor(private modalService: NgbModal, public snackBar: MatSnackBar, private demoRequestService: DemoRequestService) {
    this.demoRequest.country = this.defaultCountry;
  }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.open("Thank you! We will get back to you soon!", '', {duration: 5000});
  }

  openLg(content) {
    this.modalRef = this.modalService.open(content, { size: 'lg' });
  }

  sendDemoRequest(newDemoRequest) {
    this.demoRequestService.addDemo(newDemoRequest);
    this.modalRef.close();
  }
}
