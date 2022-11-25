import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    MatDialogModule

  ]
  ,exports:[
    NavbarComponent,
    FooterComponent,
    MatDialogModule
  ]
})
export class SharedModule { }
