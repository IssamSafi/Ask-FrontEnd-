import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-createasking',
  templateUrl: './createasking.component.html',
  styleUrls: ['./createasking.component.css']
})
export class CreateaskingComponent implements OnInit {

  
  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    itsapprove:new FormControl('',Validators.required),
    messege:new FormControl(),
    userId:new FormControl('',Validators.required),
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    this.home.createAsking(this.create.value);
  }

}
