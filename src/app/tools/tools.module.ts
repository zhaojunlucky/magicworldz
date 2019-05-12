import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [ToolsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToolsModule { }
