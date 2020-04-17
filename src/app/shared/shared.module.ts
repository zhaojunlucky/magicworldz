import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent, NavComponent } from './sidenav/sidenav.component';
import { PageHeaderComponent } from './page-header/page-header.component';

import { NavigationFocusModule } from './navigation-focus/navigation-focus';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [ThemePickerComponent, NavBarComponent, SidenavComponent, NavComponent, PageHeaderComponent, InfoDialogComponent],
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
    NavigationFocusModule,
  ],
  exports: [
    ThemePickerComponent,
    MatButtonModule,
    NavBarComponent,
    NavComponent,
    SidenavComponent,
    NavComponent,
    PageHeaderComponent,
  ]
})
export class SharedModule { }
