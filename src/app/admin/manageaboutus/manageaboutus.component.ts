import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateHomeComponent } from '../create-home/create-home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateaskingComponent } from '../createasking/createasking.component';
import { CreatecategoryComponent } from '../createcategory/createcategory.component';
import { CreateaboutusComponent } from '../createaboutus/createaboutus.component';



@Component({
  selector: 'app-manageaboutus',
  templateUrl: './manageaboutus.component.html',
  styleUrls: ['./manageaboutus.component.css']
})
export class ManageaboutusComponent implements OnInit {

 
  constructor(public home: HomeService, private dialog: MatDialog) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>

  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    description_:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    
  })

  ngOnInit(): void {
    this.home.getAllAboutus();
  }
  opendialog() {
    this.dialog.open(CreateaboutusComponent)
  }
  p_data :any={};
  openUpdateDailog(obj:any){
   
    console.log(obj);
    this.p_data={

      id:obj.id,
      description_:obj.description_,
      image:obj.image,


    }
    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);
  
    }

    uploadFile(file:any){
      if(file.length==0)
      return;
      let fileToUpload=<File>file[0]//the first image 
      const formdata= new FormData();
      formdata.append('file',fileToUpload,fileToUpload.name);
      this.home.uploadimage(formdata);
    }
  saveData(){
    this.home.updateAboutus(this.updateForm.value);
  }
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteAboutus(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
}
