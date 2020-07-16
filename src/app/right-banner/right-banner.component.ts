import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-banner',
  templateUrl: './right-banner.component.html',
  styleUrls: ['./right-banner.component.scss']
})
export class RightBannerComponent implements OnInit {
 // This is where button class/link/url can be edited
  leftButtonContent = "Conatact Us";
  btnclass = "largeButton";
  rightBannerUrl = "/contact-us"; 

  constructor() { }

  ngOnInit() {
  }

}
