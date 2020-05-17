import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-banner',
  templateUrl: './right-banner.component.html',
  styleUrls: ['./right-banner.component.scss']
})
export class RightBannerComponent implements OnInit {

  leftButtonContent = "Conatact Us";
  btnclass = "largeButton";

  constructor() { }

  ngOnInit() {
  }

}
