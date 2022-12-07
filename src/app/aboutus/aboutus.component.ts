import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllAboutus();
  }

}
