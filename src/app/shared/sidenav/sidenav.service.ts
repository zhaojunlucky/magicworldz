import { Injectable } from '@angular/core';

export interface DocItem {
  id: string;
  name: string;
  summary?: string;
  packageName?: string;
  examples?: string[];
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
  summary?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  DOCS: {[key: string]: DocCategory[]} = {
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
            examples: [
              'autocomplete-overview',
              'autocomplete-simple',
              'autocomplete-display',
              'autocomplete-filter',
              'autocomplete-optgroup',
              'autocomplete-auto-active-first-option',
            ]
          },
          {
            id: 'url-en-de',
            name: 'URL Encode & Decode',
            summary: 'Suggests relevant options as the user types.',
            examples: [
              'autocomplete-overview',
              'autocomplete-simple',
              'autocomplete-display',
              'autocomplete-filter',
              'autocomplete-optgroup',
              'autocomplete-auto-active-first-option',
            ]
          }
        ]
      }
    ]
  }
  constructor() { }

  getCategories(section: string): DocCategory[] {
    return this.DOCS['tools'];
  }
}
