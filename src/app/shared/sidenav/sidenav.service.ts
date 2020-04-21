import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  DOCS: object = {}
  constructor(private http: HttpClient) {

  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
          this.http
          .get('assets/config/sitenav.json')
          .subscribe(response => {
              this.DOCS = response;
              resolve(true);
          })
        });
  }
 
  getCategories(section: string): SideNavCategory[] {
    return this.DOCS[section];
  }
}
