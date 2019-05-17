import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component'
import { ToolsComponent } from './pages/tools/tools.component'


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'tools', component: ToolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
