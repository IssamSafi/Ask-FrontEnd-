import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    image_Path:new FormControl()
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    this.home.createUser(this.create.value);
  }
  uploadfile(file:any){
    if(file.length==0)
    return;
 let imageToupload=<File>file[0]
 const formdata= new FormData();
 formdata.append('file',imageToupload,imageToupload.name);
 this.home.uploadimage(formdata);
  }
}