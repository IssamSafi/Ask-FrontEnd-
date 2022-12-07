import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-footerguest',
  templateUrl: './footerguest.component.html',
  styleUrls: ['./footerguest.component.css']
})
export class FooterguestComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllHomes();
  }

}
