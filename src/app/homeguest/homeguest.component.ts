import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-homeguest',
  templateUrl: './homeguest.component.html',
  styleUrls: ['./homeguest.component.css']
})
export class HomeguestComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllHomes();
  }

}

