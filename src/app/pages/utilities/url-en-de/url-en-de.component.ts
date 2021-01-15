import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/shared/common-service/storage.service';

@Component({
  selector: 'url-en-de',
  templateUrl: './url-en-de.component.html',
  styleUrls: ['./url-en-de.component.scss']
})
export class UrlEnDeComponent implements OnInit {
  STORAGE_KEY: string = 'URL_EN_DE';
  @ViewChild('srcInput', { static: true }) srcInput: ElementRef;
  @Input() srcText: string = '';
  resultText: string;

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
