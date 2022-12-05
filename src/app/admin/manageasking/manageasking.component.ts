import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateHomeComponent } from '../create-home/create-home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateaskingComponent } from '../createasking/createasking.component';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-manageasking',
  templateUrl: './manageasking.component.html',
  styleUrls: ['./manageasking.component.css']
})
export class ManageaskingComponent implements OnInit {

  constructor(public home: HomeService, private dialog: MatDialog, private toastr: ToastrService) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>

  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    itsapprove:new FormControl('',Validators.required),
    messege:new FormControl(),
    userId:new FormControl('',Validators.required),
    
  })

  ngOnInit(): void {
    this.home.getAllAsking();
    
  }
  opendialog() {
    this.dialog.open(CreateaskingComponent)
  }
  p_data :any={};
  openUpdateDailog(obj:any){
   
    console.log(obj);
    this.p_data={

      id:obj.id,
      itsapprove:obj.itsapprove,
      messege:obj.messege,
      userId:obj.userId,


    }
    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);
  
    }
  saveData(){
    this.home.updateAsking(this.updateForm.value);
  }
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteAsking(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  
  }
  ApproveReject(id:number,status:number){
    this.home.AprroveRejectQ(id,status)

    if(status==1){ 
      this.toastr.success('Approve successfuly!');}
   
      else
      this.toastr.error('Reject !');}

    }


    

