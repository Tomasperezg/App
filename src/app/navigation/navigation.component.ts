import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('NavigationAnimation',[
      transition(':enter', [
        animate('900ms ease-out', style({
          opacity: '1',
          transform: 'translateY(0px)',
          zIndex: '-1',
          height: '100%',
        }))
      ]),
      transition(':leave', [
        animate('400ms ease-out', style({
          opacity: '0',
          transform: 'translateY(-300px)',
          zIndex: '-1',
          height: '0',
        }))
      ]),
    ])
  ]

})
export class NavigationComponent implements OnInit {
  
  
  constructor() { }

  show: boolean = false;


  ngOnInit() {}

}





