import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
@Component({
  selector: 'app-common-question',
  templateUrl: './common-question.component.html',
  styleUrls: ['./common-question.component.css']
})
export class CommonQuestionComponent implements OnInit {
  constructor(public home:HomeService) { }

  ngOnInit(): void {

    this.home.getAllCommonQuestion();
  }

}
