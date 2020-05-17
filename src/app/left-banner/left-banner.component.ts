import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-banner',
  templateUrl: './left-banner.component.html',
  styleUrls: ['./left-banner.component.scss']
})
export class LeftBannerComponent implements OnInit {

  leftButtonContent = "See Portfolio";
  btnclass = "largeButton";

  constructor() { }

  ngOnInit() {
  }

}
