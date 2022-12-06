import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-asking',
  templateUrl: './asking.component.html',
  styleUrls: ['./asking.component.css']
})
export class AskingComponent implements OnInit {

  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    messege:new FormControl(),
    user_Id:new FormControl('',Validators.required),
    askingdate:new FormControl(),
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    this.home.createAsking(this.create.value);
  }


}
