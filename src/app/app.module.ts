import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './Components/basic-info/basic-info.component';
import { AddressComponent } from './Components/address/address.component';
import { EducationInfoComponent } from './Components/education-info/education-info.component';
import { FormsComponent } from './Components/forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { DisplayComponent } from './Components/display/display.component';
import { Form2Component } from './Components/form2/form2.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { UserCompanyComponent } from './Components/user-company/user-company.component';
import { UserBankComponent } from './Components/user-bank/user-bank.component';
import { UseraddressComponent } from './Components/useraddress/useraddress.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    AddressComponent,
    EducationInfoComponent,
    FormsComponent,
    ContactsComponent,
    DisplayComponent,
    Form2Component,
    UserInfoComponent,
    UserCompanyComponent,
    UserBankComponent,
    UseraddressComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
