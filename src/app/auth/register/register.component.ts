import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
registerForm: FormGroup=new FormGroup({

  Firstname: new FormControl('',[Validators.required]),
  Lastname: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(10)])

})


  constructor(private route:Router) { }
  

  ngOnInit(): void {
  }
goTologin(){
this.route.navigate(['auth/login'])
}
}
