import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagTestmonialComponent } from './manag-testmonial/manag-testmonial.component';
import { ManageaskingComponent } from './manageasking/manageasking.component';
import { ManagecommonQuestionComponent } from './managecommon-question/managecommon-question.component';
import { ManagehomeComponent } from './managehome/managehome.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: 'sidebar', component: SidebarComponent },
  {path: 'managehome', component: ManagehomeComponent },
  {path: 'manageTestmonial', component: ManagTestmonialComponent },
  {path: 'manageasking', component: ManageaskingComponent },
  {path: 'manageCommonquestion', component: ManagecommonQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
