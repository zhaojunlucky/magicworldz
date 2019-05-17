import { Injectable } from '@angular/core';


export interface NavBarItem {
  name: string;
  summary: string;
}

const TOOLS = 'tools'
const ABOUT = 'about'

const NAV_ITEMS: {[key: string]: NavBarItem} = {
  [TOOLS]: {
    name: 'Tools',
    summary: 'Tools utilities.'
  },
  [ABOUT]: {
    name: 'About',
    summary: 'About MagicWorldZ.'
  },
};

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor() { }

  getNavItems() {
    return NAV_ITEMS
  }
}
