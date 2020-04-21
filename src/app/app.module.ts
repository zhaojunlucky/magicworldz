import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { PagesModule } from './pages/pages.module'

import { SidenavService } from './shared/sidenav/sidenav.service'

export function siteNavServiceFactory(sidenavService: SidenavService) {
  return () => sidenavService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    PagesModule,
  ],
  providers: [
    SidenavService,
    { provide: APP_INITIALIZER, useFactory: siteNavServiceFactory, deps: [SidenavService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
