
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateTestmonialComponent } from '../create-testmonial/create-testmonial.component';





@Component({
  selector: 'app-manag-testmonial',
  templateUrl: './manag-testmonial.component.html',
  styleUrls: ['./manag-testmonial.component.css']
})
export class ManagTestmonialComponent implements OnInit {

  constructor(public home: HomeService, private dialog: MatDialog) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>

  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    name:new FormControl('',Validators.required),
    messege:new FormControl(),
    userId:new FormControl('',Validators.required),
    
  })

  ngOnInit(): void {
    this.home.getAllTestmonial();
  }
  opendialog() {
    this.dialog.open(CreateTestmonialComponent)
  }
  p_data :any={};
  openUpdateDailog(obj:any){
   
    console.log(obj);
    this.p_data={

      id:obj.id,
      name:obj.name,
      messege:obj.messege,
      userId:obj.userId,


    }
    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);
  
    }
  saveData(){
    this.home.updateTestmonial(this.updateForm.value);
  }
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteTestmonial(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
}
