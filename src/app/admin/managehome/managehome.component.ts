import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateHomeComponent } from '../create-home/create-home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';




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
    home_id:new FormControl(),
    description_:new FormControl('',Validators.required),
    welcome_Iamge:new FormControl()
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

      home_id:obj.home_id,
      description_:obj.description_,
      welcome_Iamge:obj.welcome_Iamge

    }
    this.updateForm.controls['home_id'].setValue(this.p_data.home_id);
    this.dialog.open(this.callUpdate);
  
    }
  saveData(){
    this.home.updateHome(this.updateForm.value);
  }
  openDeleteDailog(home_id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteHome(home_id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
 
}