import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  submit(email:any,password:any){
    console.log(email.value);
    console.log(password.value);
    
    
  }
}
