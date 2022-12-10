import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HomeService } from '../Services/home.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private home:HomeService) { }

  profile :FormGroup =new FormGroup({
    id:new FormControl('',),
  })

  ngOnInit(): void {
/*     let user:any=localStorage.getItem("user");
    if(user){
      user=JSON.parse(user);
     this.profile.controls["id"].setValue(user.ID);
    }
    this.home.getuserById(ID); */
  }



    //this.home.createContactus(this.create.value); 

}
