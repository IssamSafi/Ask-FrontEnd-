import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-testmonial',
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.css']
})
export class TestmonialComponent implements OnInit {

  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    name: new FormControl('',Validators.required),
    messege: new FormControl('',Validators.required),
    user_Id: new FormControl('',Validators.required)
    
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    let user:any=localStorage.getItem("user");
    if(user){
      user=JSON.parse(user);
      this.create.controls["name"].setValue(user.Name);
      this.create.controls["user_Id"].setValue(+user.ID)
    }
    this.home.createTestmonial(this.create.value);

  }

}
