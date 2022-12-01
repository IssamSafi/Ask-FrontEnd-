import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';


@Component({
  selector: 'app-createaboutus',
  templateUrl: './createaboutus.component.html',
  styleUrls: ['./createaboutus.component.css']
})
export class CreateaboutusComponent implements OnInit {

  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    image:new FormControl(),
    description_:new FormControl('',Validators.required),
  })


  ngOnInit(): void {
    
    
  }

 
  saveData()
  {
    this.home.createAboutus(this.create.value);
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
