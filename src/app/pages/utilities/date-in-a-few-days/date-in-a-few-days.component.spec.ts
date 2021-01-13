import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInAFewDaysComponent } from './date-in-a-few-days.component';

describe('DateInAFewDaysComponent', () => {
  let component: DateInAFewDaysComponent;
  let fixture: ComponentFixture<DateInAFewDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateInAFewDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInAFewDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
