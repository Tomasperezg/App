import { Component, OnInit, } from '@angular/core'; 

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.scss']
})
export class SubscriberFormComponent implements OnInit {

  shtButton = "shortButton";
  buttonId = "Send";
  submited = false;
  submitButtonUrl = "javascript:void(0)";


  name: string;
  email: string;
  phonenumber: Number;
  subject: string;
  message: string;
  // testing info
  // Will delete once funtionality is implemented and complete emaik request

  processForm(){
    this.submited = true;
    console.log("fomr Submited");
    const allInfo= "name: "+this.name+" email:"+this.email+" Phone number: "+this.phonenumber+" Subject: "+this.subject+" Message: "+this.message;
    alert(allInfo);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
