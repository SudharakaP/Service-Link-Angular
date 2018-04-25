import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: '../main-header/main-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  pageScrolled: boolean;
  constructor() { }
  ngOnInit() {
  }

  @HostListener("window:scroll", []) 
  addShrinkClass () { 
    if (window.pageYOffset > 100)
      this.pageScrolled = true;
    else
      this.pageScrolled = false;
  }
}
