import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-date-in-a-few-days',
  templateUrl: './date-in-a-few-days.component.html',
  styleUrls: ['./date-in-a-few-days.component.scss']
})
export class DateInAFewDaysComponent implements OnInit {
  daysControl = new FormControl('', [Validators.required]);
  startDateControl = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['days', 'date'];
  results: Array<any> = [];
  startDate: string = "";

  daysList: any[] = [
    {"value": 14, name: "14"},
    {"value": 28, name: "28"},
    {"value": 56, name: "56"},
    {"value": 84, name: "84"},
    {"value": 180, name: "180"}
  ];
  constructor() { }

  ngOnInit(): void {
    this.daysControl.setValue(this.daysList);
  }

  calc(): void {
    this.startDateControl.markAsTouched();
    this.daysControl.markAsTouched();
    
    if (!this.startDateControl.invalid && !this.daysControl.invalid) {
      let date = this.startDateControl.value;
      this.startDate = this.formatDate(new Date(date));
      this.results = this.calcDate(this.startDateControl.value, this.daysControl.value);
      
    }
  }

  calcDateAfter(startDate, daysAfter): Date {
    let date = new Date(startDate);
    date.setDate(date.getDate() + daysAfter);
    return date;
  }

  calcDate(startDate, days): Array<any> {
    let result = [];
    for (let i in days) {
      let day = days[i];
      let date = this.calcDateAfter(startDate, day.value);
      result.push({
        "days": day.value,
        "date": date,
        "dateStr": this.formatDate(date),
      });
    }
    return result;
  }
  formatDate(date: Date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }
}
