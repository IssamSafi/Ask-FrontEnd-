import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { MatTableExporterModule } from 'mat-table-exporter';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { TokenInterceptor } from 'src/Interceptor/token.interceptor';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { AskingComponent } from './asking/asking.component';
import { AllQuestionComponent } from './all-question/all-question.component';
import { ShowTestmonialComponent } from './show-testmonial/show-testmonial.component';
import { HomeguestComponent } from './homeguest/homeguest.component';
import { AboutguestComponent } from './aboutguest/aboutguest.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { SearchUserComponent } from './search-user/search-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    TestmonialComponent,
    AskingComponent,
    AllQuestionComponent,
    ShowTestmonialComponent,
    HomeguestComponent,
    AboutguestComponent,

    UserProfileComponent,

    SearchUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatTableExporterModule,
    SharedModule



  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
