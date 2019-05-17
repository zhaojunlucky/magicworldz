import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule, MatIconModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent, NavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [ThemePickerComponent, NavBarComponent, SidenavComponent, NavComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
  ],
  exports: [
    ThemePickerComponent,
    MatButtonModule,
    NavBarComponent,
    NavComponent,
    SidenavComponent,
    NavComponent,
  ]
})
export class SharedModule { }
