import { Injectable } from '@angular/core';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, value: any): string | null {
    if (value === null) {
      return this.remove(key);
    }
    let str = (value instanceof String || typeof value === 'string')? value as string: JSON.stringify(value);
    localStorage.setItem(key, str);
    return str;
  }

  remove(key: string): string | null {
    return localStorage.getItem(key);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  getOrDefault(key: string, defaultVal: string = ''): string {
    let val = localStorage.getItem(key);
    return val? val: defaultVal;
  }

  getJSON(key: string, defaultVal: any = {}): any {
    let val = this.get(key);
    if (val === null || val.trim() === '') {
      return defaultVal;
    } else {
      return JSON.parse(val);
    }
  }

  getInt(key: string, defaultVal: number = 0): number {
    let val = this.get(key);
    if (val === null || val.trim() === '') {
      return defaultVal;
    } else {
      return parseInt(val);
    }
  }

  getFloat(key: string, defaultVal: number = 0): number {
    let val = this.get(key);
    if (val === null || val.trim() === '') {
      return defaultVal;
    } else {
      return parseInt(val);
    }
  }
}
