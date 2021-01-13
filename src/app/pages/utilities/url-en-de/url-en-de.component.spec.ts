import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEnDeComponent } from './url-en-de.component';

describe('UrlEnDeComponent', () => {
  let component: UrlEnDeComponent;
  let fixture: ComponentFixture<UrlEnDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlEnDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlEnDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
