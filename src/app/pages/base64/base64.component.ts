import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {
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
    this.resultText = btoa(this.srcText);
  }

  decode(): void {
    if (!this.validate()) {
      return;
    }
    try {
      this.resultText = atob(this.srcText);
    } catch (e) {
      this.resultText = e.message;
    }
  }
}
