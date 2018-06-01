import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  pageScrolled: boolean;
  public isCollapsed = false;
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

