import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HomeService } from '../Services/home.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public home:HomeService) { }

  profile :FormGroup =new FormGroup({
    id:new FormControl('',),
    fname:new FormControl('',),
     lname:new FormControl('',),
    phone:new FormControl('',),
    email:new FormControl('',),
    image_Path:new FormControl('',)
  })

userlocalstorage:any=localStorage.getItem('user');
userInfo:any=JSON.parse(this.userlocalstorage);


  ngOnInit(): void {

this.home.getuserById(this.userInfo.ID);

  }
  uploadfile(file:any){
    if(file.length==0)
    return;
 let imageuser=<File>file[0]
 const formdata= new FormData();
 formdata.append('file',imageuser,imageuser.name);
 this.home.uploadimageuser(formdata);
  }

  saveData(){
    this.profile.controls['id'].setValue(this.home.getuser.id);
    this.profile.controls['fname'].setValue(this.home.getuser.fname);
    this.profile.controls['lname'].setValue(this.home.getuser.lname);
    this.profile.controls['email'].setValue(this.home.getuser.email);
    this.profile.controls['phone'].setValue(this.home.getuser.phone);


    this.profile.controls['image_Path'].setValue(this.home.getuser.image_Path);

    this.home.updateUser(this.profile.value);
  }



}
