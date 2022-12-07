import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-show-testmonial',
  templateUrl: './show-testmonial.component.html',
  styleUrls: ['./show-testmonial.component.css']
})
export class ShowTestmonialComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.ShowTestmonial();
  }

}
