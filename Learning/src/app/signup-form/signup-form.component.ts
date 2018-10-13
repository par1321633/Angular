import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }
  private genders: string[];
  private user:User;


  ngOnInit() {
  
    this.genders =  ['Male', 'Female', 'Others'];
  
    this.user = new User({
      email:"", password: { pwd: "" , confirm_pwd: ""}, 
      gender: this.genders[0], terms: false});
  }

  public onFormSubmit(form) {
    this.user = form.value;
    console.log( this.user);
    console.log("valid: " + form.valid);
    form.reset();
  }
}

