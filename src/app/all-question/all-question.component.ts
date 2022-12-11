

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AdminService } from 'src/app/Services/admin.service';

declare var name: any;
@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
 

  constructor(public home: HomeService, private dialog: MatDialog){}
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>


  create :FormGroup =new FormGroup({
    commentt:new FormControl('',Validators.required),
    userid:new FormControl('',),
    askid:new FormControl('')
  })
  userLike:any;
  numberOfLikes : number=0;
  numberOfDislike:number=0;
  numberOfComment:number=0;
  like:number=0;

  //commentt : new FormControl('',Validators.required);

  ngOnInit(): void {
    
    this.home.Report();
    this.home.NewReportComments();
    this.home.Getallcomment();
    this.home.numofcomment();
   
   
    //this.home.createComment(this.commentt.value);
    new name();
    

   
  }
  clickcomment(){

    this.numberOfComment++;
  }

 

 clickLike(){
  {
    
      let user:any=localStorage.getItem("user");
      if(user){
        user=JSON.parse(user);
        for(this.numberOfLikes=0;this.numberOfLikes<1;+1){
     if(user.ID)
     this.numberOfLikes++;
     
    }

     }
 
   }
}

clickDislike(){
  {
  let user:any=localStorage.getItem("user");
  if(user){
    user=JSON.parse(user);
    for(this.numberOfDislike=0;this.numberOfDislike<1;+1){
 if(user.ID)
  this.numberOfDislike++;
 }
  }}
  }

 saveData()
 {
   let user:any=localStorage.getItem("user");
   if(user){
     user=JSON.parse(user);
     this.create.controls["userid"].setValue(+user.ID)
    //  this.create.controls["askid"].setValue(id)
   }
   this.home.createComment(this.create.value);

 }


 updateForm :FormGroup= new FormGroup({
  messege:new FormControl(),
  
})



 p_data :any={};
 openUpdateDailog(obj:any){
  
   console.log(obj);
   this.p_data={

    messege:obj.messege


   }
   this.updateForm.controls['id'].setValue(this.p_data.id);
   this.dialog.open(this.callUpdate);
 
   }


 save(){
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
}
