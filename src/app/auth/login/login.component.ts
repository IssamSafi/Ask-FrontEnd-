import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private auth:AuthService) { }
 email= new FormControl('',[Validators.required,Validators.email])
 password= new FormControl('',[Validators.required,Validators.minLength(8)])
  ngOnInit(): void {
  }
  submit(){
   this.auth.submit(this.email,this.password);
    
    
  }
    goToReg(){
      this.route.navigate(['auth/register'])
    }

}
