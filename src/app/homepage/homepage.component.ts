import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
   // This is where button class/link/url can be edited
  buttonId = "Learn More";
  shtButton = "shortButton";
  url = "/about"


  constructor() { }

  ngOnInit() {  }


}
