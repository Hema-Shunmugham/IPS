import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PersonalComponent } from './personal/personal.component';
import { CorporateComponent } from './corporate/corporate.component';
import { HeaderComponent } from './header/header.component';
import { CompRepeatDirective } from './directive/comp-repeat.directive';
import { CompaniesComponent } from './companyusers/companies.component';

const appRoutes:Routes=[
  {
    path:'',
    component: UsersComponent
  },
  {
    path:'personal',
    component: PersonalComponent
  },
  {
    path:'corporate',
    component: CorporateComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PersonalComponent,
    CorporateComponent,
    HeaderComponent,
    CompRepeatDirective,
    CompaniesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
