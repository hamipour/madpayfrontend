import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './auth/login/login.component';
import { RouteGaurdGuard } from './routeGuard/route-gaurd.guard';

const routes: Routes = [
  // { path: 'panel', canActivate: [RouteGaurdGuard], component: PanelComponent }
  { path: 'panel', component: PanelComponent },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
