import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('NavigationAnimation',[
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ 
            opacity: 0, 
            width: '0px' 
          }),
          stagger(200, [
            animate('1s ease-out', style({ 
              opacity: 1, 
              width: '250px' 
            })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(200, [
            animate('1s ease-out', style({ 
              opacity: 0, 
              width: '0px' 
            })),
          ]),
        ])
      ]),
    ]),
  ]

})
export class NavigationComponent implements OnInit {

isShown = false; 
toggle() {
this.isShown = !this.isShown; 
} 
  
  constructor() { }


  ngOnInit() {}

}





