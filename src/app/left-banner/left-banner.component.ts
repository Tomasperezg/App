import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-banner',
  templateUrl: './left-banner.component.html',
  styleUrls: ['./left-banner.component.scss']
})
export class LeftBannerComponent implements OnInit {
   // This is where button class/link/url can be edited
  leftButtonContent = "See Portfolio";
  btnclass = "largeButton";
  url = '/portfolio';
  constructor() { }

  ngOnInit() {
  }

}
