import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [AboutComponent, ToolsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class PagesModule { }
