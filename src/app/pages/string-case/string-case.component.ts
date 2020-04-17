import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-case',
  templateUrl: './string-case.component.html',
  styleUrls: ['./string-case.component.scss']
})
export class StringCaseComponent implements OnInit {
  srcText: string = '';
  splitText: string = '';
  lowerCaseStr: string = '';
  upperCaseStr: string = '';
  capitalizeStr: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  doTransform(newVal): void {
    if (newVal != '') {
      let str = newVal.trim()
      this.lowerCaseStr = str.toLowerCase();
      this.upperCaseStr = str.toUpperCase();
      this.capitalizeStr = this.capitalize(this.lowerCaseStr, this.splitText);
    } else {
      this.lowerCaseStr = this.upperCaseStr = this.capitalizeStr = '';
    }
  }

  doCap(newVal): void {
    this.capitalizeStr = this.capitalize(this.lowerCaseStr, newVal);
  }

  capitalize(str, splitStr): string {
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

  capitalizeWord(str): string {
    if (typeof str !== 'string') {
      return '';
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }

}
