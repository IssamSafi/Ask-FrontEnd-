import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {


  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    locationc:new FormControl('',Validators.required),
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    this.home.createContactus(this.create.value);
  }

}

