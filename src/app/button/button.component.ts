import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})


export class ButtonComponent implements OnInit {
  @Input() buttonItem: string;

  value1: string;
  value2: string;
  link1: string;
  link2: string;
  public blackbuttonstyle = true;
  public whitebuttonstyle = false;
  public buttonstyle = {
    "black-button": this.blackbuttonstyle,
    "white-button": this.whitebuttonstyle,
  }

  constructor() { 
    this.value1 = "See More";
    this.link1 = "##";
    this.value2 = "Sign Up";
    this.link2 = "###";
  }

  ngOnInit() {
  }

}
