import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
declare var name: any;
@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
 

  constructor(public home: HomeService){}
  numberOfLikes : number=0;
  numberOfDislike:number=0;
  comment="add answer here -_-";
  postcomment=[];
post(){
  this.postcomment.push();
}
  ngOnInit(): void {
    
    this.home.Report();
    new name();
   
  }
  
 clickLike(){
  this.numberOfLikes++;
 }
 clickDislike(){
  this.numberOfDislike++;
 }


 

}
