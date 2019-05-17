import { Component, OnInit } from '@angular/core';

import { NavBarService } from './nav-bar.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navBarItems;
  itemKeys;
  constructor(private navBarService: NavBarService) { }

  ngOnInit() {
    this.navBarItems = this.navBarService.getNavItems();
    this.itemKeys = Object.keys(this.navBarItems);
  }

}
