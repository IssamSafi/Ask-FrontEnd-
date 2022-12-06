import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {

  constructor(public home: HomeService){}

  ngOnInit(): void {
   // if(this.home.Report.)
    this.home.Report();
  }

}
