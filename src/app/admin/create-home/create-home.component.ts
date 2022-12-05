import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';


@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {


  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    welcome_Iamge: new FormControl('',Validators.required),
    description_: new FormControl()
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    this.home.createHome(this.create.value);
  }
  uploadfilehome(file:any){
    if(file.length==0)
    return;
 let imageToupload=<File>file[0]
 const formdata= new FormData();
 formdata.append('file',imageToupload,imageToupload.name);
 this.home.uploadimagehome(formdata);
  }
}

