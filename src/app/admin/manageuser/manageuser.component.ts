import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateHomeComponent } from '../create-home/create-home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateuserComponent } from '../createuser/createuser.component';



@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {

  constructor(public home: HomeService, private dialog: MatDialog) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>

  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    image_Path:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    this.home.getAllUsers();
  }
  opendialog() {
    this.dialog.open(CreateuserComponent)
  }
  p_data :any={};
  openUpdateDailog(obj:any){
   
    console.log(obj);
    this.p_data={
      fname:obj.fname,
      lname:obj.lname,
      phone:obj.phone,
      email:obj.email,
      image_Path:obj.image_Path,
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
      this.home.uploadimageuser(formdata);
    }
  saveData(){
    this.home.updateUser(this.updateForm.value);
  }
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteUser(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
}