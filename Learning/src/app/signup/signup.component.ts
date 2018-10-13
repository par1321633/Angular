import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  private user:User;

  ngOnInit() {
    this.user = new User()
  }

  onSubmit(form) {
    this.user = form.value;
    console.log( this.user);
    console.log("valid: " + form.valid);
    form.reset();alert("Thanks for submitting! Data.");
  }

}
