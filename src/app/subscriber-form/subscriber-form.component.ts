import { Component, OnInit } from '@angular/core'; 
import { Subscriber } from '../Subscriber';

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.scss']
})
export class SubscriberFormComponent implements OnInit {

  buttonId = "Submit";
  currentlySearching = ["Yes", "Not at the moment"];

  submited = false;

  onSubmit() {
    this.submited = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
