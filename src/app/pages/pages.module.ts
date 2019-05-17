import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'
import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [AboutComponent, ToolsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AboutComponent,
    ToolsComponent
  ]
})
export class PagesModule { }
