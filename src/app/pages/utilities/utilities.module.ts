import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesViewerComponent } from './utilities-viewer/utilities-viewer.component';
import { Route, RouterModule, Routes, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { Base64Component } from './base64/base64.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { UrlEnDeComponent } from './url-en-de/url-en-de.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { ShaComponent } from './sha/sha.component';
import { StringCaseComponent } from './string-case/string-case.component';
import { CsvMarkdownComponent } from './csv-markdown/csv-markdown.component';
import { InfoDialogModule } from 'src/app/shared/info-dialog/info-dialog.module';
import { DateInAFewDaysComponent } from './date-in-a-few-days/date-in-a-few-days.component';

export function utilitiesRouteMatcher(url: UrlSegment[], group: UrlSegmentGroup, route: Route) {
  let segments = group.segments
  return segments.length >= 2 && segments[0].path.toLowerCase() === 'utilities' ? ({consumed: url}) : null;
}

function commonChildMatch(name: string, parent: string, url: UrlSegment[], group: UrlSegmentGroup, route?: Route) {
  let segments = group.segments
  if (segments.length === 3) {
    return segments[2].path.toLowerCase() === name ? ({consumed: url}) : null;
  } else if (segments.length === 2 && segments[1].path.toLowerCase() === parent) {
    segments.push(new UrlSegment(name, {}))
    return ({consumed: segments});
  } else {
    return null;
  }
}

export const UTILITIES_ROUTES: Routes = [
  {
    matcher: (url, group) => commonChildMatch('base64', 'en-de-code', url, group),
    pathMatch: 'full',
    component: Base64Component
  },
  {
    matcher: (url, group) => commonChildMatch('url-en-de', '', url, group),
    pathMatch: 'full',
    component: UrlEnDeComponent
  },
  {
    matcher: (url, group) => commonChildMatch('json-formatter', '', url, group),
    pathMatch: 'full',
    component: JsonFormatterComponent
  },
  {
    matcher: (url, group) => commonChildMatch('sha', '', url, group),
    pathMatch: 'full',
    component: ShaComponent
  },
  {
    matcher: (url, group) => commonChildMatch('string-case', 'string-csv-markdown', url, group),
    pathMatch: 'full',
    component: StringCaseComponent
  },
  {
    matcher: (url, group) => commonChildMatch('csv-to-md', '', url, group),
    pathMatch: 'full',
    component: CsvMarkdownComponent
  },
  {
    matcher: (url, group) => commonChildMatch('date-in-a-few-days', 'date-time', url, group),
    pathMatch: 'full',
    component: DateInAFewDaysComponent
  },
]

@NgModule({
  declarations: [UtilitiesViewerComponent, Base64Component, UrlEnDeComponent, JsonFormatterComponent, ShaComponent, StringCaseComponent, CsvMarkdownComponent, DateInAFewDaysComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatIconModule,
    ClipboardModule,
    MatTooltipModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    InfoDialogModule,
  ]
})
export class UtilitiesModule { }
