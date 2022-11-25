import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-create-testmonial',
  templateUrl: './create-testmonial.component.html',
  styleUrls: ['./create-testmonial.component.css']
})
export class CreateTestmonialComponent implements OnInit {

  constructor(private home:HomeService) { }
  create :FormGroup =new FormGroup({
    name: new FormControl('',Validators.required),
    messege: new FormControl('',Validators.required),
    userId: new FormControl('',Validators.required),
    
  })


  ngOnInit(): void {
  }

 
  saveData()
  {
    this.home.createTestmonial(this.create.value);
  }

}
