import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutbuttonContent = "Contact us";
  btnclass = "largeButton";
  aboutButtonUrl = "/contact-us";

  constructor() { }

  ngOnInit() {
  }

}
