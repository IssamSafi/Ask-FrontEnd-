import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutguestComponent } from './aboutguest/aboutguest.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AskingComponent } from './asking/asking.component';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { HomeguestComponent } from './homeguest/homeguest.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutusComponent },
  {path: 'contactus', component: ContactusComponent },
  {path: 'Testmonial', component: TestmonialComponent },
  {path: 'asking', component: AskingComponent },
  {path: '', component: HomeguestComponent },
  {path: 'aboutguest', component: AboutguestComponent },
  {path: 'search', component: SearchUserComponent },
  {path: 'Profile', component: UserProfileComponent},

  {path: 'auth', loadChildren:()=>AuthModule },
  {path: 'admin', loadChildren:()=>AdminModule,
  canActivate:[AuthorizationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
