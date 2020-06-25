import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projectArray: projects[];

  constructor() { 
    this.projectArray = [
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/Home1.jpg', alt: 'Main Home Image 1', url: '##', name: 'Home 1'},
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/Home2.jpg', alt: 'Main Home Image 2', url: '##', name: 'home 2'},
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/Home3.jpg', alt: 'Main Home Image 3', url: '##', name: 'Home 3'},
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/Home4.jpg', alt: 'Main Home Image 4', url: '##', name: 'Home 4'},
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/MainHomeIMG.jpg', alt: 'Main Home Image 5', url: '##', name: 'Home 5'},
    ];

  }

  ngOnInit() {

  }

}

export class projects{
  value: string;
  alt: string;
  url: string;
  name: string;
};
