import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcoronaComponent } from './addcorona/addcorona.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewcoronaComponent } from './viewcorona/viewcorona.component';
import { RouterModule } from '@angular/router';
const myroutes=[{path:"",Component:AddcoronaComponent},
{path:"view",Component:ViewcoronaComponent}]

@NgModule({
  declarations: [
    AppComponent,
    AddcoronaComponent,
    NavbarComponent,
    ViewcoronaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
