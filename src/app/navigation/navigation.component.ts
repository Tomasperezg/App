import { Component, OnInit, } from '@angular/core';

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
          transform: 'translateY(-800px)',
        }),
        animate('0.5s', style({ 
          opacity: 0.8,
          transform: 'translateY(0px)',
        })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ 
          opacity: 0,
          transform: 'translateY(-100px)', 
        }))
      ])
    ]),
  ]

})
export class NavigationComponent implements OnInit {

//This is where the menu dropdown animations gets activateßd 
isShown = false; 
toggle() {
this.isShown = !this.isShown; 
} 

  

// This control the logic of the menu image 
menuOpen = 'assets/Mobile-Images/MobilMenuOpen.png';
menuClosed = 'assets/Mobile-Images/closeMenu.png';

imageSrc = this.menuOpen;

changeMenuIcon(){
  if (this.imageSrc == this.menuOpen){
    this.imageSrc = this.menuClosed;
    console.log('menu Open');
  } 
  else if(this.imageSrc == this.menuClosed){
    this.imageSrc = this.menuOpen;
    console.log('menu closed');
  }
};

  constructor() { }


  ngOnInit() {}

}





