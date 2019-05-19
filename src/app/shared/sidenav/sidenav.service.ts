import { Injectable } from '@angular/core';

export interface SideNavItem {
  id: string;
  name: string;
  summary?: string;
}

export interface SideNavCategory {
  id: string;
  name: string;
  items: SideNavItem[];
  summary?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  DOCS: {[key: string]: SideNavCategory[]} = {
    'tools': [
      {
        id: 'en-de-code',
        name: 'Encode & Decode Utilities',
        summary: 'Base64, URL Encode Decode utilities',
        items: [
          {
            id: 'base64',
            name: 'Base64 Encode & Decode',
            summary: 'Suggests relevant options as the user types.',
          },
          {
            id: 'url-en-de',
            name: 'URL Encode & Decode',
            summary: 'Suggests relevant options as the user types.',
          },
          {
            id: 'json-formatter',
            name: 'JSON Formatter',
            summary: ''
          }
        ]
      }
    ]
  }
  constructor() { }

  getCategories(section: string): SideNavCategory[] {
    return this.DOCS[section];
  }
}
