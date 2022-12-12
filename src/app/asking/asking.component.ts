import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { AuthService } from 'src/app/Services/auth.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-asking',
  templateUrl: './asking.component.html',
  styleUrls: ['./asking.component.css']
})
export class AskingComponent implements OnInit {

  constructor(public home:HomeService,private auth:AuthService) { }
  create :FormGroup =new FormGroup({
    messege:new FormControl(),
    user_Id:new FormControl('',Validators.required),
    askingdate:new FormControl(),
    category_Id:new FormControl(),
  })


  ngOnInit(): void {

    this.home.getAllCategories();
  }

 
  saveData()
  {
    debugger;
    let user:any=localStorage.getItem("user");
    if(user){
      user=JSON.parse(user);
      this.create.controls["user_Id"].setValue(+user.ID)
    }
    this.create.controls["category_Id"].setValue(+this.create.controls["category_Id"].value);
    this.home.createAsking(this.create.value);
  }


}
