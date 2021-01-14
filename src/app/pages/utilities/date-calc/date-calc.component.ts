import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { DurationInputArg2, Moment } from 'moment';


interface DateCalType {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'date-calc',
  templateUrl: './date-calc.component.html',
  styleUrls: ['./date-calc.component.scss']
})
export class DateCalcComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(),
  });

  calDateForm = new FormGroup({
    calDate: new FormControl(new Date()),
  });

  direction: string = "1";

  calcTypes: DateCalType[] = [
    {value: 'day', viewValue: 'Day'},
    {value: 'week', viewValue: 'Week'},
    {value: 'month', viewValue: 'Month'}
  ];
  selectedCalcType: string = this.calcTypes[0].value;
  inputCalcNum: string = '';
  dateDiff: string = '';
  dateCalc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  calcDateDiff(event: any): void {
    let start = this.range.value.start;
    let end = this.range.value.end;
    if (start && end) {
      let dayDiff = this.calcDayDiff(start, end);
      let weekDiff = this.calcWeekDiff(start, end);
      let monthDiff = this.calcMonthDiff(start, end);
      this.dateDiff = `${dayDiff}${weekDiff? ' = ' + weekDiff: ''}${monthDiff? ' = ' + monthDiff: ''}`;
    }
  }

  calcDayDiff(start: Moment, end: Moment): string {
    let days = end.diff(start, 'day');
    return `${days} ${days > 1? 'days' : 'day'}`
  }

  calcWeekDiff(start: Moment, end: Moment): string {
    let weeks = end.diff(start, 'week');
    if (weeks > 0) {
      let weekStr = `${weeks} ${weeks > 1 ? 'weeks': 'week'}`;
      let leftDays = end.diff(start, 'day') - weeks * 7;
      if (leftDays > 0) {
        return `${weekStr} ${leftDays} ${leftDays > 1? 'days': 'day'}`;
      } else {
        return weekStr;
      }
    } else {
      return '';
    }
  }

  calcMonthDiff(start: Moment, end: Moment): string {
    let months = end.diff(start, 'month');
    if (months > 0) {
      let monthStr = `${months} ${months > 1? 'months': 'month'}`;
      let leftDays = end.date() - start.date();
      if (leftDays > 0) {
        return `${monthStr}r ${leftDays} ${leftDays > 1? 'days': 'day'}`;
      } else {
        return monthStr;
      }
    } else {
      return '';
    }
  }

  calculate(): void {
    if (this.calDateForm.valid) {
      let date: Moment = moment(this.calDateForm.value.calcDate);
      let directionNum = parseInt(this.direction);
      let value = parseInt(this.inputCalcNum);
      date.add(directionNum * value, this.selectedCalcType as DurationInputArg2);
      this.dateCalc = date.format("M/D/YYYY dddd");
    }
  }
}
