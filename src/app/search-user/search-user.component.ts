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
  fname:string="";
  constructor(public home: HomeService) { }

  ngOnInit(): void {

  }


  SearchI(ev:any)
  {
    this.fname= ev.target.value;
  }

  search()
  {
     if(this.fname !=null){
    this.home.SearchUser(this.fname);}
  else {
  this.home.SearchAllUser();} 
  
  }

/* 
  SreachInput(ev:any)
  {
    this.price= ev.target.value;
  }

  search()
  {
    this.home.SearchByPrice(this.price);
  } */





}