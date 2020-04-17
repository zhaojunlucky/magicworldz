import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ComponentPageTitle } from './page-title';
import { SidenavService } from '../sidenav/sidenav.service';

@Injectable({
    providedIn: 'root'
})
export class PageTitleService {
    private _router: Router = null;
    constructor(public _componentPageTitle: ComponentPageTitle,
        public sidenavService: SidenavService) { }

    public start(router: Router): void {
        this._router = router;
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            let segments = event.urlAfterRedirects.split('/');

            if (segments.length == 3) {
                try {
                    let section = segments[1];
                    let id = segments[2];
                    let cats = this.sidenavService.getCategories(section);
                    if (cats != undefined && cats != null) {
                        for (let cat in cats) {
                            let items = cats[cat].items;
                            for (let index in items) {
                                let cat = items[index];
                                if (cat.id == id) {
                                    this._componentPageTitle.title = cat.name;
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.log(e);
                    this._componentPageTitle.title = 'MagicWorldZ';
                }

            }
        });
    }
}