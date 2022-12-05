import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateHomeComponent } from '../create-home/create-home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateaskingComponent } from '../createasking/createasking.component';
import { CreatecategoryComponent } from '../createcategory/createcategory.component';


@Component({
  selector: 'app-managehome',
  templateUrl: './managehome.component.html',
  styleUrls: ['./managehome.component.css']
})
export class ManagehomeComponent implements OnInit {

  constructor(public home: HomeService, private dialog: MatDialog) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>

  updateForm :FormGroup= new FormGroup({
    home_Id:new FormControl(),
    description_:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    location:new FormControl('',Validators.required),
    welcome_Iamge:new FormControl('',Validators.required),
    
  })

  ngOnInit(): void {
    this.home.getAllHomes();
  }
  opendialog() {
    this.dialog.open(CreateHomeComponent)
  }
  p_data :any={};
  openUpdateDailog(obj:any){
   
    console.log(obj);
    this.p_data={

      home_Id:obj.home_Id,
      description_:obj.description_,
      phone:obj.phone,
      email:obj.email,
      location:obj.location,
      welcome_Iamge:obj.welcome_Iamge,



    }
    this.updateForm.controls['home_Id'].setValue(this.p_data.home_Id);
    this.dialog.open(this.callUpdate);
  
    }

    uploadFile(file:any){
      if(file.length==0)
      return;
      let fileToUpload=<File>file[0]//the first image 
      const formdata= new FormData();
      formdata.append('file',fileToUpload,fileToUpload.name);
      this.home.uploadimagehome(formdata);
    }
  saveData(){
    this.home.updateHome(this.updateForm.value);
  }
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteHome(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
}
