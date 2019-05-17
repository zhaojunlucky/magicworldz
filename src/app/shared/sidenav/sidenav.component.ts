import {
  Component, Input, NgZone, ViewEncapsulation, ViewChild, OnInit, NgModule, OnDestroy
} from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Observable, Subject, combineLatest} from 'rxjs';
import {switchMap, takeUntil, startWith, map} from 'rxjs/operators';
import {trigger, animate, state, style, transition} from '@angular/animations';
import {BreakpointObserver} from '@angular/cdk/layout';

import { SidenavService } from './sidenav.service'


const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {
  params: Observable<Params>;
  isScreenSmall: Observable<boolean>;
  @Input() categoryName: string;

  constructor(private sidenavService: SidenavService,
    private _route: ActivatedRoute,
    zone: NgZone,
    breakpoints: BreakpointObserver) {
      this.isScreenSmall = breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
        .pipe(map(breakpoint => breakpoint.matches));
  }

  @ViewChild(MatSidenav/*, {static: false}*/) sidenav: MatSidenav;

  ngOnInit() {
    // Combine params from all of the path into a single object.
    this.params = combineLatest(
      this._route.pathFromRoot.map(route => route.params),
      Object.assign);
  }

}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({height: '0px', display: 'none'})),
      state('expanded', style({height: '*', display: 'block'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class NavComponent implements OnInit, OnDestroy {
  @Input() params: Observable<Params>;
  catName: string;
  expansions = {};
  private _onDestroy = new Subject<void>();

  constructor(private sidenavService: SidenavService,
    private parentComp: SidenavComponent,
              private _router: Router) {
    this.catName = parentComp.categoryName;
  }

  ngOnInit() {
    this._router.events.pipe(
      startWith(null),
      switchMap(() => this.params),
      takeUntil(this._onDestroy)
    ).subscribe(p => this.setExpansions(p));
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /** Set the expansions based on the route url */
  setExpansions(params: Params) {
    const categories = this.sidenavService.getCategories(params.section);
    for (const category of (categories || [])) {
      if (this.expansions[category.id] === true) {
        continue;
      }

      let match = false;
      for (const item of category.items) {
        if (this._router.url.indexOf(item.id) > -1) {
          match = true;
          break;
        }
      }

      if (this.expansions[category.id] === false) {
        this.expansions[category.id] = match;
      }
    }
  }

  /** Gets the expanded state */
  _getExpandedState(category: string) {
    return this.getExpanded(category) ? 'expanded' : 'collapsed';
  }

  /** Toggles the expanded state */
  toggleExpand(category: string) {
    this.expansions[category] = !this.expansions[category];
  }

  /** Gets whether expanded or not */
  getExpanded(category: string): boolean {
    return this.expansions[category] === undefined ? true : this.expansions[category];
  }

}

