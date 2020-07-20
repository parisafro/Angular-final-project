import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showerr=false;
   submit(form){

    var firstName = form.firstName;
    console.log(firstName);
  
    var lastName = form.lastName;
    console.log(lastName);

    var gender = form.gender;
    console.log(gender);
  
    var email= form.email;
    console.log(email);
    
     var username= form.username;
    console.log(username);

    var pass= form.pass;
    console.log(pass);

     var checkpass= form.checkpass;
    console.log(checkpass);
    if(pass==checkpass)
    {
      this.showerr=false;
    }
    else{
      this.showerr=true;
    }
  }

}