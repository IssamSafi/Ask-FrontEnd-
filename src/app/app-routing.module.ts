import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { TestmonialComponent } from './testmonial/testmonial.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutusComponent },
  {path: 'contactus', component: ContactusComponent },
  {path: 'Testmonial', component: TestmonialComponent },

  {path: 'auth', loadChildren:()=>AuthModule },
  {path: 'admin', loadChildren:()=>AdminModule,
  canActivate:[AuthorizationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
