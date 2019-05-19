import { Component, OnInit } from '@angular/core';

import * as MD5 from 'crypto-js/md5'
import * as SHA1 from 'crypto-js/sha1'
import * as SHA256 from 'crypto-js/sha256'
import * as SHA512 from 'crypto-js/sha512'
import * as SHA3 from 'crypto-js/sha3'

@Component({
  selector: 'app-sha',
  templateUrl: './sha.component.html',
  styleUrls: ['./sha.component.scss']
})
export class ShaComponent implements OnInit {
  private srcText: string = '';
  private sha3Str: string = '';
  private sha1Str: string = '';
  private sha256Str: string = '';
  private sha512Str: string = '';
  private md5Str: string = '';

  constructor() { }

  ngOnInit() {
  }

  doSha(newVal): void {
    this.sha1Str = SHA1.default(newVal);
    this.sha256Str = SHA256.default(newVal);
    this.sha512Str = SHA512.default(newVal);
    this.sha3Str = SHA3.default(newVal);
    this.md5Str = MD5.default(newVal);
  }
}
