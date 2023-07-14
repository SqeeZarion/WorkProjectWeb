import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MainComponent } from './componets/main/main.component';
import { PortfolioComponent } from './componets/portfolio/portfolio.component';
import { ChooseProjectComponent } from './componets/choose-project/choose-project.component';
import { MainAdminComponent } from './componets/main-admin/main-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    PortfolioComponent,
    ChooseProjectComponent,
    MainAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
