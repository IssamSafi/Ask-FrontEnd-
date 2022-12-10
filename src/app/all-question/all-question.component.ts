import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var name: any;
@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
 

  constructor(public home: HomeService){}

  create :FormGroup =new FormGroup({
    commentt:new FormControl('',Validators.required),
    userid:new FormControl('',Validators.required),
    //askid:new FormControl('')
  })


  numberOfLikes : number=0;
  numberOfDislike:number=0;
  comment ="test";
  postcomment=[];
  //commentt : new FormControl('',Validators.required);
post(){
  this.postcomment.push.apply(this.comment);
  this.comment="";
}
  ngOnInit(): void {
    
    this.home.Report();
    //this.home.createComment(this.commentt.value);
    new name();
    

    
   
  }
  
 clickLike(){
  this.numberOfLikes++;
 }
 clickDislike(){
  this.numberOfDislike++;
 }


 saveData()
 {
   let user:any=localStorage.getItem("user");
   if(user){
     user=JSON.parse(user);
     this.create.controls["userid"].setValue(+user.ID)
   }
   this.home.createComment(this.create.value);
 }


}
