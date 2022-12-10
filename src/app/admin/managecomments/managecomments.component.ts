

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateTestmonialComponent } from '../create-testmonial/create-testmonial.component';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-managecomments',
  templateUrl: './managecomments.component.html',
  styleUrls: ['./managecomments.component.css']
})
export class ManagecommentsComponent implements OnInit {

  constructor(public home: HomeService, private dialog: MatDialog, private toastr: ToastrService) { }
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>



  ngOnInit(): void {
    this.home.Getallcomment();
  }


  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.DeleteComments(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
}