
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { CreateTestmonialComponent } from '../create-testmonial/create-testmonial.component';





@Component({
  selector: 'app-manag-testmonial',
  templateUrl: './manag-testmonial.component.html',
  styleUrls: ['./manag-testmonial.component.css']
})
export class ManagTestmonialComponent implements OnInit {

  constructor(public home: HomeService, private dialog: MatDialog) { }
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>



  ngOnInit(): void {
    this.home.getAllTestmonial();
  }


  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          
          this.home.deleteTestmonial(id);
        }
          
          else if(result=='no')
          console.log('thank you ');
          
      }
    })
  
  }
}
