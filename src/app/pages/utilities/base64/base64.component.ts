import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../../shared/common-service/storage.service';

@Component({
  selector: 'base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {
  STORAGE_KEY: string = 'BASE64';
  @ViewChild('srcInput', { static: true }) srcInput: ElementRef;
  @Input() srcText: string = '';
  resultText: string;

  encodings: any[] = [
    { value: "utf-8", name: "UTF-8" },
    { value: "ascii", name: "ASCII" },
    { value: "utf16le", name: "UTF-16LE"},
    { value: "ucs2", name: "UCS2"},
    { value: "latin1", name: "Latin1"},
    { value: "binary", name: "Binary"},
    { value: "hex", name: "HEX"}
  ]

  selectedEnc: BufferEncoding = this.encodings[0].value;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.srcText = this.storageService.getOrDefault(this.STORAGE_KEY);
  }

  validate(): boolean {
    if (this.srcText == '') {
      alert('Please input text to decode or encode!');
      this.srcInput.nativeElement.focus();
      return false;
    }
    this.save();
    return true;
  }

  save(): void {
    this.storageService.save(this.STORAGE_KEY, this.srcText);
  }

  encode(): void {
    if (!this.validate()) {
      return;
    }
    try {
      let buf = Buffer.from(this.srcText, this.selectedEnc);
      this.resultText = buf.toString('base64');
    } catch (e) {
      this.resultText = e.message;
    }
  }

  decode(): void {
    if (!this.validate()) {
      return;
    }
    try {
      let buf = Buffer.from(this.srcText, 'base64')
      this.resultText = buf.toString();
    } catch (e) {
      this.resultText = e.message;
    }
  }

}
