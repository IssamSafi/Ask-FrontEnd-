
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateHomeComponent } from '../create-home/create-home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateaskingComponent } from '../createasking/createasking.component';
import { CreatecategoryComponent } from '../createcategory/createcategory.component';
import { CreateaboutusComponent } from '../createaboutus/createaboutus.component';
import { CreatecontactComponent } from '../createcontact/createcontact.component';


@Component({
  selector: 'app-managecontact',
  templateUrl: './managecontact.component.html',
  styleUrls: ['./managecontact.component.css']
})
export class ManagecontactComponent implements OnInit {


  constructor(public home: HomeService, private dialog: MatDialog) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>

  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    name:new FormControl('',Validators.required),
    messege:new FormControl('',Validators.required),
    
  })

  ngOnInit(): void {
    this.home.getAllContactus();
  }
  opendialog() {
    this.dialog.open(CreatecontactComponent)
  }
  p_data :any={};
  
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteContactus(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
}