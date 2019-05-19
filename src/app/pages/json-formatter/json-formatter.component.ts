import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as JSONFormatter from 'json-formatter-js'


@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent implements OnInit {
  @ViewChild('inputJSON') srcInput: ElementRef;
  @ViewChild('resultDiv') resultDiv: ElementRef;

  private jsonString: string = '';
  private formattedJSONHtml: string = '';

  constructor() { }

  ngOnInit() {
  }

  formmat(): void {
    this.removeChilds();
    if (this.jsonString == '') {
      alert('Please input JSON string');
      this.srcInput.nativeElement.focus();
      return;
    }
    try {
      let json = JSON.parse(this.jsonString);
      let formatter = new JSONFormatter.default(json);
      this.resultDiv.nativeElement.appendChild(formatter.render());
    } catch (e) {
      this.resultDiv.nativeElement.innerHTML = `<p>${e.message}</p>`;
    }
  }

  removeChilds(): void {
    while (this.resultDiv.nativeElement.hasChildNodes()) {
      this.resultDiv.nativeElement.removeChild(this.resultDiv.nativeElement.childNodes[0]);
    }
  }
}
