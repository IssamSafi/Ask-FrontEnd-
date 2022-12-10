import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    name:new FormControl('',Validators.required),
    messege:new FormControl('',Validators.required),
    
  })


  ngOnInit(): void {
  }

 
  saveData()
  {   
    let user:any=localStorage.getItem("user");
  if(user){
    user=JSON.parse(user);
    this.create.controls["name"].setValue(user.Name);
  }
    this.home.createContactus(this.create.value);
  }
}
