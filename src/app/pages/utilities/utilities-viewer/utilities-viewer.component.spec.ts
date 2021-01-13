import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesViewerComponent } from './utilities-viewer.component';

describe('UtilitiesViewerComponent', () => {
  let component: UtilitiesViewerComponent;
  let fixture: ComponentFixture<UtilitiesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilitiesViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
