import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { PageTitleService } from './shared/page-title/page-title-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'magicworldz';
  constructor(public pageTitleService: PageTitleService,
    private _router: Router){
  }

  ngOnInit() {
    this.pageTitleService.start(this._router);
  }
}
