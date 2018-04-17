import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GeneralComponent } from './components/general/general.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'general', component: GeneralComponent },
  { path: '**', component: GeneralComponent }
];

export const routes = RouterModule.forRoot(appRoutes);
