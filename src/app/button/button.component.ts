import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})


export class ButtonComponent implements OnInit {
  @Input() buttonItem: string;
  @Input() buttonClass: string;
  @Input() buttonUrl: string;



  constructor() { 

  }

  ngOnInit() {
  }

}
