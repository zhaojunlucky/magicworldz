import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { SharedModule } from '../shared/shared.module'
import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';
import { Base64Component } from './base64/base64.component';
import { UrlEnDeComponent } from './url-en-de/url-en-de.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { ShaComponent } from './sha/sha.component';
import { ComponentPageTitle } from '../shared/page-title/page-title'


export const TOOLS_ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'base64'},
  { path: 'base64', component: Base64Component },
  { path: 'url-en-de', component: UrlEnDeComponent },
  { path: 'json-formatter', component: JsonFormatterComponent},
  { path: 'sha', component: ShaComponent},
];


@NgModule({
  declarations: [AboutComponent, ToolsComponent, Base64Component, UrlEnDeComponent, JsonFormatterComponent, ShaComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
  ],
  exports: [
    AboutComponent,
    ToolsComponent,
    Base64Component,
    UrlEnDeComponent,
  ],
  providers: [
    ComponentPageTitle,
  ]
})
export class PagesModule { }
