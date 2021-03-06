import { Component, OnInit } from '@angular/core';

import * as MD5 from 'crypto-js/md5'
import * as SHA1 from 'crypto-js/sha1'
import * as SHA256 from 'crypto-js/sha256'
import * as SHA512 from 'crypto-js/sha512'
import * as SHA3 from 'crypto-js/sha3'
import { StorageService } from 'src/app/shared/common-service/storage.service';

@Component({
  selector: 'sha',
  templateUrl: './sha.component.html',
  styleUrls: ['./sha.component.scss']
})
export class ShaComponent implements OnInit {
  STORAGE_KEY: string = 'SHA';
  srcText: string = '';
  sha3Str: string = '';
  sha1Str: string = '';
  sha256Str: string = '';
  sha512Str: string = '';
  md5Str: string = '';

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.srcText = this.storageService.getOrDefault(this.STORAGE_KEY);
    this.doSha(this.srcText);
  }

  doSha(newVal: string): void {
    if (newVal != '') {
      this.sha1Str = SHA1(newVal).toString();
      this.sha256Str = SHA256(newVal).toString();
      this.sha512Str = SHA512(newVal).toString();
      this.sha3Str = SHA3(newVal).toString();
      this.md5Str = MD5(newVal).toString();
      this.save();
    } else {
      this.sha1Str = this.sha256Str = this.sha512Str = this.sha3Str = this.md5Str = '';
    }
  }

  save(): void {
    this.storageService.save(this.STORAGE_KEY, this.srcText);
  }
}
