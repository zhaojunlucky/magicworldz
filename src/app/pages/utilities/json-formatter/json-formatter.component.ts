import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as JSONFormatter from 'json-formatter-js'
import { StorageService } from 'src/app/shared/common-service/storage.service';

@Component({
  selector: 'json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent implements OnInit {
  STORAGE_KEY: string = 'JSON_FORMMAT';
  @ViewChild('inputJSON', { static: true }) srcInput: ElementRef;
  @ViewChild('resultDiv', { static: true }) resultDiv: ElementRef;

  jsonString: string = '';

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.jsonString = this.storageService.getOrDefault(this.STORAGE_KEY);
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
    this.save();
  }

  save(): void {
    this.storageService.save(this.STORAGE_KEY, this.jsonString);
  }

  removeChilds(): void {
    while (this.resultDiv.nativeElement.hasChildNodes()) {
      this.resultDiv.nativeElement.removeChild(this.resultDiv.nativeElement.childNodes[0]);
    }
  }

}
