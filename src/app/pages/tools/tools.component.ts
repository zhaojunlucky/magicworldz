import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Params, ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, Subscription, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';


import { SidenavService } from '../../shared/sidenav/sidenav.service'
import { ComponentPageTitle } from '../../shared/page-title/page-title'

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit, OnDestroy {

  constructor(public sidenavService: SidenavService,
    public _componentPageTitle: ComponentPageTitle) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
