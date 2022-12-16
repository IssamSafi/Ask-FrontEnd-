

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AdminService } from 'src/app/Services/admin.service';
import { ToastrService } from 'ngx-toastr';

declare var name: any;
@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
 

  constructor(public home: HomeService, private dialog: MatDialog, private toastr: ToastrService){}
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
  check:number=0;
  checkQ:number=0;
  like:any={};




  createLike :FormGroup =new FormGroup({
    likee:new FormControl(''),
    dislike:new FormControl('',),
    askid:new FormControl(''),
    userid:new FormControl('')
  })

 updateLike :FormGroup =new FormGroup({
  id:new FormControl(''),
  likee:new FormControl(''),
  dislike:new FormControl('',),
    askid:new FormControl(''),
    userid:new FormControl('')
  })





  ngOnInit(): void {
    this.Check();
    this.home.Report();
    this.home.NewReportComments();
    this.home.Getallcomment();
    this.home.numofcomment();
    this.home.getAllLike();
   this.CheckQu();
   this.home.getLikeCount();
   
 

   

   
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



  takevalue(ev:any){
    debugger;
this.create.controls["askid"].setValue(ev.target.value);
console.log(ev.target.value);

  }

p_like:any={};


 Like(askid:number){

  let user:any=localStorage.getItem("user");
  if(user){
    user=JSON.parse(user);
    this.like=this.home.like.find(x=>x.userid==+user.ID&&x.askid==askid);
    debugger;
    if(this.like!=undefined){
     if(this.like.likee==1) { 
       this.toastr.error('your alaready like this question !!');}
     else if (this.like.likee==null){
     this.p_like={
        id:this.like.id,
        likee:this.like.likee,
        dislike:this.like.dislike,
          askid:this.like.askid,
          userid:this.like.userid
       }
       this.updateLike.controls['id'].setValue(this.p_like.id);
       this.updateLike.controls['likee'].setValue(1);
       this.updateLike.controls['dislike'].setValue(null);
       this.updateLike.controls['askid'].setValue(this.p_like.askid);
       this.updateLike.controls['userid'].setValue(this.p_like.userid);
      
      this.home.updateLike(this.updateLike.value)}
    }
    else {
      this.createLike.controls['likee'].setValue(1);
      this.createLike.controls['dislike'].setValue(null);
      this.createLike.controls['askid'].setValue(+askid);
      this.createLike.controls['userid'].setValue(+user.ID);
      this.home.createLike(this.createLike.value)
      
    }
  }

  
}

Dislike(askid:number){

  let user:any=localStorage.getItem("user");
  if(user){
    user=JSON.parse(user);
    this.like=this.home.like.find(x=>x.userid==+user.ID&&x.askid==askid);
 
  
    if(this.like!=undefined){
      debugger;
     if(this.like.dislike==1) {
      this.toastr.error('your alaready dislike this question !!');}
     else if (this.like.dislike==null){


     this.p_like={
        id:this.like.id,
        likee:this.like.likee,
        dislike:this.like.dislike,
          askid:this.like.askid,
          userid:this.like.userid
       }
       this.updateLike.controls['id'].setValue(this.p_like.id);
       this.updateLike.controls['likee'].setValue(null);
       this.updateLike.controls['dislike'].setValue(1);
       this.updateLike.controls['askid'].setValue(this.p_like.askid);
       this.updateLike.controls['userid'].setValue(this.p_like.userid);
      
      this.home.updateLike(this.updateLike.value)}
    }
    else {
      this.createLike.controls['likee'].setValue(null);
      this.createLike.controls['dislike'].setValue(1);
      this.createLike.controls['askid'].setValue(+askid);
      this.createLike.controls['userid'].setValue(+user.ID);
      this.home.createLike(this.createLike.value)
      
    }
  } 
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
  likee:new FormControl(),
  dislike:new FormControl(),
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
    likee:obj.likee,
    dislike:obj.dislike,

   }
   this.updateForm.controls['id'].setValue(this.p_data.id);
   this.updateForm.controls['category_Id'].setValue(+this.p_data.category_Id);
   this.updateForm.controls['askingdate'].setValue(this.p_data.askingdate);
   this.updateForm.controls['user_Id'].setValue(+this.p_data.user_Id);
   this.updateForm.controls['itsapprove'].setValue(this.p_data.itsapprove);
   this.updateForm.controls['likee'].setValue(this.p_data.likee);
   this.updateForm.controls['dislike'].setValue(this.p_data.dislike);


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
  id:new FormControl(),
  commentt:new FormControl(),
  userid:new FormControl(),
  askid:new FormControl(),
  
})



 pdata :any={};
 openUpdateCommentDailog(obj:any){
  debugger;
   console.log(obj.value);
   
   this.pdata={
    id:obj.id,
    commentt:obj.commentt,
    userid:obj.userid,
    askid:obj.askid,



   }
   this.updateComment.controls['id'].setValue(this.pdata.id);
   this.updateComment.controls['commentt'].setValue(this.pdata.commentt);
   this.updateComment.controls['userid'].setValue(+this.pdata.userid);
   this.updateComment.controls['askid'].setValue(this.pdata.id);




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
