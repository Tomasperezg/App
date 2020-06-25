import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  buttonId="Sign Up";
  shtButton="shortButton";

  SocialLogo: Social[];
  
  constructor() { 
    this.SocialLogo = [
      {value: 'assets/Mobile-Images/facebook.png', alt: 'Facebook Logo', direct: '##'},
      {value: 'assets/Mobile-Images/instagram.png', alt: 'Instagram Logo', direct: '##'},
      {value: 'assets/Mobile-Images/youtube.png', alt: 'Youtube Logo', direct: '##'},
      {value: 'assets/Mobile-Images/pinterest.png', alt: 'Pinterest Logo', direct: '##'},
    ];
  }
  ngOnInit() {}
}

export class Social{
  value: string;
  alt: string;
  direct: string;
};