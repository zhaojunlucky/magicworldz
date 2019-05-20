import { Component, OnInit, EventEmitter, NgModule, Output } from '@angular/core';

import { ComponentPageTitle } from '../page-title/page-title'


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(public _componentPageTitle: ComponentPageTitle) { }

  ngOnInit() {
  }

  getTitle() {
    return this._componentPageTitle.title;
  }
}
