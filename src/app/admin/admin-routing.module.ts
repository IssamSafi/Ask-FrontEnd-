import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidbarComponent } from './sidbar/sidbar.component';

const routes: Routes = [
  {path: 'sidbar',
   component:SidbarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
