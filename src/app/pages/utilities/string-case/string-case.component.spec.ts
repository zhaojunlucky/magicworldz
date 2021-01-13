import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCaseComponent } from './string-case.component';

describe('StringCaseComponent', () => {
  let component: StringCaseComponent;
  let fixture: ComponentFixture<StringCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
