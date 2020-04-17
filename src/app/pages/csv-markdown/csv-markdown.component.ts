import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoDialogComponent } from '../../shared/info-dialog/info-dialog.component';


import * as Papa from 'papaparse';


@Component({
  selector: 'app-csv-markdown',
  templateUrl: './csv-markdown.component.html',
  styleUrls: ['./csv-markdown.component.scss']
})
export class CsvMarkdownComponent implements OnInit {
  files: any[] = [];
  csvTxt: string = "";
  markdownTableStr: string = "";
  separator: string = ",";
  quote: string = "";
  newLine: string = "\\n";
  escape: string = "\"";
  hasHeaders: boolean = false;


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  generateMdTable(): void {
    if (this.csvTxt.trim().length == 0) {
      alert("Please upload a CSV file or manually input CSV text!!!");
      return;
    }
    let result = Papa.parse(this.csvTxt, {
          delimiter: this.separator,
          newline: this.newLine,
          quoteChar: this.quote,
          escapeChar: this.escape,
          header: false,
          skipEmptyLines: true,
      });
    
      if (result.errors.length > 0) {
        alert(JSON.stringify(result.errors));
      }

      this.makeMdTable(result.data, this.hasHeaders);
     
  }

  santiMd(str: string): string {
    return str;
  }

  geneateRow(row: Array<any>, colMaxLen: Array<any>): string {
    let rowCol = ["|"];
    for (let i = 0; i < row.length; ++i) {
      let col = `${this.santiMd(row[i])}`
      if (col.length < colMaxLen[i]) {
        col = `${col}${' '.repeat(colMaxLen[i] - col.length)}`;
      }
      rowCol.push(col);
      rowCol.push("|");
    }
    return rowCol.join("");
  }

  makeMdTable(data: Array<any>, hasHeaders: boolean): void {
    if (data.length <= 0) {
      alert("No CSV rows parsed!!!");
      return;
    }
    let i = 0;
    let md = []
    let colLen = data[0].length;
    let colMaxLen = [];
    for (let j = 0; j < colLen; ++j) {
      colMaxLen.push(0);
    }

    data.forEach(row=> {
      for (let j = 0; j < colLen; ++j) {
        row[j] = row[j].trim();
        colMaxLen[j] = Math.max(colMaxLen[j], row[j].length);
      }
    });
    

    if (hasHeaders) {
      md.push(this.geneateRow(data[i], colMaxLen));
      ++i;
    } else {
      let arr = ["|"]
      for (let j = 0; j < colLen; j++) {
        let colName = `Column ${j+1}`;
        colMaxLen[j] = Math.max(colMaxLen[j], colName.length);
        if (colName.length < colMaxLen[j]) {
          colName = `${colName}${' '.repeat(colMaxLen[j] - colName.length)}`;
        }
        arr.push(colName);
        arr.push("|");
      }
      md.push(arr.join(""));
    }

    let arr = ["|"];
    for (let j = 0; j < colLen; j++) {
      arr.push(`${'-'.repeat(colMaxLen[j])}|`);
    }

    md.push(arr.join(""));

    for (; i < data.length; ++i) {
      md.push(this.geneateRow(data[i], colMaxLen));
    }
    let str = md.join("\n");
    this.markdownTableStr = str;
  }

  handleOneFile(files: any[]): any {
    if (files.length > 1) {
      let dialogRef = this.dialog.open(InfoDialogComponent, {
        height: '300px',
        width: '400px',
        data: {
          title: 'Mutilple Files Warning',
          message: 'You upload mutilple files, but only the first file will be handled!'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.prepareFilesList([files[0]]);
      });
    } else {
      this.prepareFilesList(files);
    }
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    // only handle first one
    this.handleOneFile($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    // only handle first one
    this.handleOneFile(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.readFile(files[0]);
  }

  readFile(file: any): void {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.csvTxt = fileReader.result.toString();
    }
    fileReader.readAsText(file);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
