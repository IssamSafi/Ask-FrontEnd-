
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateTestmonialComponent } from '../create-testmonial/create-testmonial.component';
import { CreatecommonQuestionComponent } from '../createcommon-question/createcommon-question.component';





@Component({
  selector: 'app-managecommon-question',
  templateUrl: './managecommon-question.component.html',
  styleUrls: ['./managecommon-question.component.css']
})
export class ManagecommonQuestionComponent implements OnInit {

  constructor(public home: HomeService, private dialog: MatDialog) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>

  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    question:new FormControl('',Validators.required),

    
  })

  ngOnInit(): void {
    this.home.getAllCommonQuestion();
  }
  opendialog() {
    this.dialog.open(CreatecommonQuestionComponent)
  }
  p_data :any={};
  openUpdateDailog(obj:any){
   
    console.log(obj);
    this.p_data={

      id:obj.id,
      question:obj.question,



    }
    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);
  
    }
  saveData(){
    this.home.updateCommonQuestion(this.updateForm.value);
  }
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteCommonQuestion(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
  
}
