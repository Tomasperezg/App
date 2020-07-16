import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // This is where button class/link/url can be edited
  aboutbuttonContent = "Contact us";
  btnclass = "largeButton";
  aboutButtonUrl = "/contact-us";

  constructor() { }

  ngOnInit() {
  }

}
