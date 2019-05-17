import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MatMenuModule, MatIconModule, MatGridListModule, MatButtonModule } from '@angular/material';


import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [ThemePickerComponent, NavBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [
    ThemePickerComponent,
    MatButtonModule,
    NavBarComponent,
  ]
})
export class SharedModule { }
