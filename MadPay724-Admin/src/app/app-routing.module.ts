import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  { path: '', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
