import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvMarkdownComponent } from './csv-markdown.component';

describe('CsvMarkdownComponent', () => {
  let component: CsvMarkdownComponent;
  let fixture: ComponentFixture<CsvMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvMarkdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
