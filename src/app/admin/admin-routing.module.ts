import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManagTestmonialComponent } from './manag-testmonial/manag-testmonial.component';
import { ManageaboutusComponent } from './manageaboutus/manageaboutus.component';
import { ManageaskingComponent } from './manageasking/manageasking.component';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { ManagecommonQuestionComponent } from './managecommon-question/managecommon-question.component';
import { ManagecontactComponent } from './managecontact/managecontact.component';
import { ManagehomeComponent } from './managehome/managehome.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ReportComponent } from './report/report.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: 'sidebar', component: SidebarComponent },
  {path: 'managehome', component: ManagehomeComponent },
  {path: 'manageTestmonial', component: ManagTestmonialComponent },
  {path: 'manageasking', component: ManageaskingComponent },
  {path: 'manageCommonquestion', component: ManagecommonQuestionComponent },
  {path: 'manageuser', component: ManageuserComponent },
  {path: 'managecategory', component: ManagecategoryComponent },
  {path: 'manageaboutus', component: ManageaboutusComponent },
  {path: 'managecontact', component: ManagecontactComponent},
  {path: 'dashbord', component: DashbordComponent},
  {path: 'Report', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
