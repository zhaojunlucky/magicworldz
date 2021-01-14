import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCalcComponent } from './date-calc.component';

describe('DateCalcComponent', () => {
  let component: DateCalcComponent;
  let fixture: ComponentFixture<DateCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
