import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Base64Component } from '../base64/base64.component';

@Component({
  selector: 'utilities-viewer',
  templateUrl: './utilities-viewer.component.html',
  styleUrls: ['./utilities-viewer.component.scss']
})
export class UtilitiesViewerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

}
