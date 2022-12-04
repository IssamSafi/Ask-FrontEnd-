import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';


@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    category_Name:new FormControl('',Validators.required),
    image_path: new FormControl('',Validators.required),
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    this.home.createCategory(this.create.value);
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
