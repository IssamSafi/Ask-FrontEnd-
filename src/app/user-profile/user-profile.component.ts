import { Component, OnInit } from '@angular/core';
import{ProfileService}from '../Services/profile.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public profile: ProfileService) { }

  ngOnInit(): void {
  }

}
