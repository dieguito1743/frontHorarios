import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GeneralComponent } from './components/general/general.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
