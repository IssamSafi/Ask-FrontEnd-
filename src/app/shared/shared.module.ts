import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {ToastrModule, ToastNoAnimation, ToastNoAnimationModule} from 'ngx-toastr';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    MatDialogModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
    

  ]
  ,exports:[
    NavbarComponent,
    FooterComponent,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
