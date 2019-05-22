import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexesReportComponent } from './indexes-report.component';

describe('IndexesReportComponent', () => {
  let component: IndexesReportComponent;
  let fixture: ComponentFixture<IndexesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
