import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';

/* import { NgxSpinnerService } from 'ngx-spinner'; */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm :FormGroup= new FormGroup({
    fname :new FormControl('',[Validators.required]),
    lname :new FormControl('',[Validators.required]),
    user_name :new FormControl('',[Validators.required,Validators.email]),
    password :new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
    phone:new FormControl('',[Validators.required,Validators.minLength(8)]),
    image_Path:new FormControl('')
  })

  constructor(private route:Router,/* ,private spinner :NgxSpinnerService */private home:HomeService) { }

    submit(){
/*       this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },3000) */
      console.log(this.registerForm.value);
      this.home.Rigester(this.registerForm.value);
    }
    saveData()
    {
      
    }


  ngOnInit(): void {
  }
  matchError(){
    if(this.registerForm.controls['password'].value==
    this.registerForm.controls['confirmPassword'].value)
    this.registerForm.controls['confirmPassword'].setErrors(null);
    else 
    this.registerForm.controls['confirmPassword'].setErrors({mismatch:true});

  }
  goToLogin(){
    this.route.navigate(['auth'])
  }
  goToHome(){
    this.route.navigate(['/'])
  }

  uploadfile(file:any){
    if(file.length==0)
    return;
 let imageuser=<File>file[0]
 const formdata= new FormData();
 formdata.append('file',imageuser,imageuser.name);
 this.home.uploadimageuser(formdata);
  }
}

