import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// in order to user router parameters we first need to import router to component

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projectArray: projects[];

  // we need to pass the routing service by adding it to the constructor
  constructor(private router: Router ) { 

    this.projectArray = [
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/Home1.jpg', alt: 'Main Home Image 1', name: 'Home 1', id: '1'},
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/Home2.jpg', alt: 'Main Home Image 2', name: 'home 2', id: '2'},
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/Home3.jpg', alt: 'Main Home Image 3', name: 'Home 3', id: '3'},
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/Home4.jpg', alt: 'Main Home Image 4',  name: 'Home 4', id: '4'},
      {value: 'http://blackbirdhomesprojectsgr.com/ProjectImages/MainHomeIMG.jpg', alt: 'Main Home Image 5', name: 'Home 5', id: '5'},
    ];

  }

  ngOnInit() {

  }


  // we create a click event where the router will take two inputs:
  // The router (this case /portfolio) and the id 
  onSelect(item):any{
    this.router.navigate([`/portfolio/`, item.id]);
    console.log(this.projectArray);
  }


}

export class projects{
  value: string;
  alt: string;
  name: string;
  id: string;
};
