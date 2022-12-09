import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { every } from 'rxjs';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  fname="";
  constructor(public home: HomeService) { }

  ngOnInit(): void {

  }


  SreachInput(ev:any)
  {
    this.fname= ev.target.value;
  }

  search()
  {
    this.home.SearchUser(this.fname);
  }






}