import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-url-en-de',
  templateUrl: './url-en-de.component.html',
  styleUrls: ['./url-en-de.component.scss']
})
export class UrlEnDeComponent implements OnInit {
  @ViewChild('srcInput') srcInput: ElementRef;
  @Input() srcText: string = '';
  resultText: string;

  constructor() { }

  ngOnInit() {
  }

  validate(): boolean {
    if (this.srcText == '') {
      alert('Please input text to decode or encode!');
      this.srcInput.nativeElement.focus();
      return false;
    }
    return true;
  }

  encode(): void {
    if (!this.validate()) {
      return;
    }
    this.resultText = encodeURI(this.srcText);
  }

  decode(): void {
    if (!this.validate()) {
      return;
    }
    try {
      this.resultText = decodeURIComponent(this.srcText);
    } catch (e) {
      this.resultText = e.message;
    }
  }
}
