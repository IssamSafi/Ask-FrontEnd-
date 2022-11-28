import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManagehomeComponent } from './managehome/managehome.component';
import { CreateHomeComponent } from './create-home/create-home.component';

import { SharedModule } from '../shared/shared.module';


import { ManagTestmonialComponent } from './manag-testmonial/manag-testmonial.component';
import { CreateTestmonialComponent } from './create-testmonial/create-testmonial.component';
import { CreateaskingComponent } from './createasking/createasking.component';
import { ManageaskingComponent } from './manageasking/manageasking.component';
import { ManagecommonQuestionComponent } from './managecommon-question/managecommon-question.component';
import { CreatecommonQuestionComponent } from './createcommon-question/createcommon-question.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { ManageaboutusComponent } from './manageaboutus/manageaboutus.component';
import { CreateaboutusComponent } from './createaboutus/createaboutus.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ManagecontactComponent } from './managecontact/managecontact.component';


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
    CreatecommonQuestionComponent,
    ManageuserComponent,
    CreateuserComponent,
    CreatecategoryComponent,
    ManagecategoryComponent,
    ManageaboutusComponent,
    CreateaboutusComponent,
    CreatecontactComponent,
    ManagecontactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
 
  ]
})
export class AdminModule { }
