import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as JSONFormatter from 'json-formatter-js'

@Component({
  selector: 'json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent implements OnInit {
  @ViewChild('inputJSON', { static: true }) srcInput: ElementRef;
  @ViewChild('resultDiv', { static: true }) resultDiv: ElementRef;

  jsonString: string = '';

  constructor() { }

  ngOnInit(): void {
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
