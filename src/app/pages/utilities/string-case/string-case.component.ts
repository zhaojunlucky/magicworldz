import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/common-service/storage.service';

@Component({
  selector: 'string-case',
  templateUrl: './string-case.component.html',
  styleUrls: ['./string-case.component.scss']
})
export class StringCaseComponent implements OnInit {
  STORAGE_KEY: string = 'STRING_CASE';
  srcText: string = '';
  splitText: string = '';
  lowerCaseStr: string = '';
  upperCaseStr: string = '';
  capitalizeStr: string = '';

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    let history = this.storageService.getJSON(this.STORAGE_KEY);
    if (history) {
      this.srcText = history.srcText;
      this.splitText = history.splitText;
      this.doTransform(this.srcText);
    }
  }

  doTransform(newVal: string): void {
    if (newVal != '') {
      let str = newVal.trim()
      this.lowerCaseStr = str.toLowerCase();
      this.upperCaseStr = str.toUpperCase();
      this.capitalizeStr = this.capitalize(this.lowerCaseStr, this.splitText);
      this.save();
    } else {
      this.lowerCaseStr = this.upperCaseStr = this.capitalizeStr = '';
    }
  }

  doCap(newVal: string): void {
    this.capitalizeStr = this.capitalize(this.lowerCaseStr, newVal);
  }

  capitalize(str: string, splitStr: string): string {
    splitStr = splitStr.trim();
    if (splitStr.length == 0) {
      return this.capitalizeWord(str);
    } else {
      let strArr = str.split(splitStr);
      let arr = [];
      for (let index in strArr) {
        arr.push(this.capitalizeWord(strArr[index]));
      }
      return arr.join(splitStr);
    }
  }

  capitalizeWord(str: string): string {
    if (typeof str !== 'string') {
      return '';
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }

  save(): void {
    this.storageService.save(this.STORAGE_KEY, {
      srcText: this.srcText,
      splitText: this.splitText,
    });
  }
}
