import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManagehomeComponent } from './managehome/managehome.component';
import { CreateHomeComponent } from './create-home/create-home.component';

import { SharedModule } from '../shared/shared.module';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagTestmonialComponent } from './manag-testmonial/manag-testmonial.component';
import { CreateTestmonialComponent } from './create-testmonial/create-testmonial.component';
import { CreateaskingComponent } from './createasking/createasking.component';
import { ManageaskingComponent } from './manageasking/manageasking.component';
import { ManagecommonQuestionComponent } from './managecommon-question/managecommon-question.component';
import { CreatecommonQuestionComponent } from './createcommon-question/createcommon-question.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ManagehomeComponent,
    CreateHomeComponent,
    ManagTestmonialComponent,
    CreateTestmonialComponent,
    CreateaskingComponent,
    ManageaskingComponent,
    ManagecommonQuestionComponent,
    CreatecommonQuestionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class AdminModule { }
