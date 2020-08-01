import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  // { path: '', component: PanelComponent },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
