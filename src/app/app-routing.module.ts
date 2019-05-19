import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component'
import { ToolsComponent } from './pages/tools/tools.component'

import { TOOLS_ROUTES } from './pages/pages.module'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'tools', component: ToolsComponent, children: TOOLS_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
