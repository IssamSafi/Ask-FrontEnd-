import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-aboutguest',
  templateUrl: './aboutguest.component.html',
  styleUrls: ['./aboutguest.component.css']
})
export class AboutguestComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllAboutus();
  }

}
