import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    submit(form){
    var firstName = form.firstName;
    console.log(firstName);
  
    var lastName = form.lastName;
    console.log(lastName);
  
    var email= form.email;
    console.log(email);

    var username = form.username;
    console.log(username);

    var pass= form.pass;
    console.log(pass);

    var repass= form.repass;
    console.log(repass);

    
  }

}