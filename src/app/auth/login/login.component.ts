import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
 email= new FormControl('',[Validators.required,Validators.email])
 password= new FormControl('',[Validators.required,Validators.minLength(10)])
  ngOnInit(): void {
  }
    submit(){
      console.log(this.email.value);
      console.log(this.password.value);
      
      
    }
}
