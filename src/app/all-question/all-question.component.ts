

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
  @ViewChild('callUpdatCommentDailog') callUpdateComment!:TemplateRef<any>
  @ViewChild('callDeleteCommentDailog') callDeleteComment!:TemplateRef<any>

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
  check:number=0;
  checkQ:number=0;


  //commentt : new FormControl('',Validators.required);

  ngOnInit(): void {
    this.Check();
    this.home.Report();
    this.home.NewReportComments();
    this.home.Getallcomment();
    this.home.numofcomment();
   this.CheckQu();
   
    //this.home.createComment(this.commentt.value);

   

   
  }

Check(){
  debugger;
  let user:any=localStorage.getItem("user");
  if(user){
    user=JSON.parse(user);
this.check=+user.ID;
  }
}


CheckQu(){
  debugger;
  let user:any=localStorage.getItem("user");
  if(user){
    user=JSON.parse(user);
this.checkQ=+user.ID;
  }
}




  clickcomment(){

    this.numberOfComment++;
  }

  takevalue(ev:any){
    debugger;
this.create.controls["askid"].setValue(ev.target.value);
console.log(ev.target.value);

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

 saveData(id:number)
 {
  
   let user:any=localStorage.getItem("user");
   if(user){
     user=JSON.parse(user);
     this.create.controls["userid"].setValue(+user.ID)
    //  this.create.controls["askid"].setValue(id)
   }
   debugger;
   this.create.controls["askid"].setValue(id);
console.log(id);
debugger;
   this.home.createComment(this.create.value);

 }


 updateForm :FormGroup= new FormGroup({
  id:new FormControl(),
  messege:new FormControl(),
  user_Id:new FormControl(),
  askingdate:new FormControl(),
  category_Id:new FormControl(),
  itsapprove:new FormControl(),
  
})



 p_data :any={};
 openUpdateDailog(obj:any){
  debugger;
   console.log(obj.value);
   
   this.p_data={
    id:obj.id,
    messege:obj.messege,
    user_Id:obj.user_Id,
    askingdate:obj.askingdate,
    category_Id:obj.category_Id,
    itsapprove:obj.itsapprove,


   }
   this.updateForm.controls['id'].setValue(this.p_data.id);
   this.updateForm.controls['category_Id'].setValue(+this.p_data.category_Id);
   this.updateForm.controls['askingdate'].setValue(this.p_data.askingdate);
   this.updateForm.controls['user_Id'].setValue(+this.p_data.user_Id);
   this.updateForm.controls['itsapprove'].setValue(this.p_data.itsapprove);




   this.dialog.open(this.callUpdate);
 
   }


 save(){
  debugger;
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


updateComment :FormGroup= new FormGroup({
  commid:new FormControl(),
  commentt:new FormControl(),
  user_Id:new FormControl(),
  askid:new FormControl(),
  
})



 pdata :any={};
 openUpdateCommentDailog(obj:any){
  debugger;
   console.log(obj.value);
   
   this.pdata={
    commid:obj.commid,
    commentt:obj.commentt,
    user_Id:obj.user_Id,
    id:obj.id,


   }
   this.updateComment.controls['commid'].setValue(this.pdata.commid);
   this.updateComment.controls['commentt'].setValue(this.pdata.commentt);
   this.updateComment.controls['user_Id'].setValue(+this.pdata.user_Id);
   this.updateComment.controls['askid'].setValue(this.pdata.askid);




   this.dialog.open(this.callUpdateComment);
 
   }


 saveChange(){
  debugger;
  this.home.updateComments(this.updateComment.value);
}
openDeleteCommenntDailog(id:number)
{
  const dialogRef=  this.dialog.open(this.callDeleteComment);
  dialogRef.afterClosed().subscribe((result)=>{
    if(result!=undefined)
    {
      if(result=='yes')
      {
        
        this.home.DeleteComments(id);
      }
        
        else if(result=='no')
        console.log('thank you ');
        
    }
  })


}




}
