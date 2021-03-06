import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { Papa } from 'ngx-papaparse';
import { StorageService } from 'src/app/shared/common-service/storage.service';

const BREAKPOINT_WIDTH: number = 480;

@Component({
  selector: 'csv-markdown',
  templateUrl: './csv-markdown.component.html',
  styleUrls: ['./csv-markdown.component.scss']
})
export class CsvMarkdownComponent implements OnInit {
  STORAGE_KEY: string = 'CSV_MARKDOWN';
  files: any[] = [];
  csvTxt: string = "";
  markdownTableStr: string = "";
  separator: string = ",";
  quote: string = "";
  newLine: any = "\\n";
  escape: string = "\"";
  hasHeaders: boolean = false;
  breakpoint: number;

  constructor(private dialog: MatDialog, private papa: Papa, private storageService: StorageService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= BREAKPOINT_WIDTH) ? 1 : 5;
    let history = this.storageService.getJSON(this.STORAGE_KEY, null);
    if (history) {
      this.csvTxt = history.csvTxt;
      this.separator = history.separator;
      this.quote = history.quote;
      this.newLine = history.newLine;
      this.escape = history.escape;
      this.hasHeaders = history.hasHeaders;
    }
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= BREAKPOINT_WIDTH) ? 1 : 5;
  }

  save(): void {
    this.storageService.save(this.STORAGE_KEY, {
      csvTxt: this.csvTxt,
      separator: this.separator,
      quote: this.quote,
      newLine: this.newLine,
      escape: this.escape,
      hasHeaders: this.hasHeaders,
    });
  }

  generateMdTable(): void {
    if (this.csvTxt.trim().length == 0) {
      alert("Please upload a CSV file or manually input CSV text!!!");
      return;
    }
    let result = this.papa.parse(this.csvTxt, {
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
      this.save();
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
    let colMaxLen: number[] = [];
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

  handleOneFile(files: any): any {
    this.files = [];
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
  onFileDropped($event: any) {
    // only handle first one
    this.handleOneFile($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    // only handle first one
    this.handleOneFile(files);
  }

  fileBrowseHandlerWrapper(event: any) {
    let el = event.target as HTMLInputElement;
    this.fileBrowseHandler(el.files);
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
      this.csvTxt = fileReader?.result?.toString()?? '';
    }
    fileReader.readAsText(file);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals?: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = !decimals || decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
