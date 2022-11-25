import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';


@Component({
  selector: 'app-createcommon-question',
  templateUrl: './createcommon-question.component.html',
  styleUrls: ['./createcommon-question.component.css']
})
export class CreatecommonQuestionComponent implements OnInit {

  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    question: new FormControl('',Validators.required),

    
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    this.home.createCommonQuestion(this.create.value);
  }

}
