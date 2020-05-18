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
        style({ 
          opacity: 0,
          transform: 'translateY(-200px)', 
        }),
        animate('1s', style({ 
          opacity: 1,
          transform: 'translateY(1px)',
        })),
      ]),
      transition(':leave', [
        animate('1s', style({ 
          opacity: 0,
          transform: 'translateY(-100px)', 
        }))
      ])
    ]),
  ]

})
export class NavigationComponent implements OnInit {

isShown = false; 
toggle() {
this.isShown = !this.isShown; 
} 
  


imageButton = [
  {
    src: 'assets/Mobile-Images/Menu_Icon_MOB.png',
  },
  {
    src: 'assets/Mobile-Images/closeMenu.png',
  }
];

imageSrc = 'assets/Mobile-Images/Menu_Icon_MOB.png'
changeMenuIcon(){
  this.imageSrc = 'assets/Mobile-Images/closeMenu.png';
};

  constructor() { }


  ngOnInit() {}

}





