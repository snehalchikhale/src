import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QAReportsComponent } from './qa-reports.component';

describe('QAReportsComponent', () => {
  let component: QAReportsComponent;
  let fixture: ComponentFixture<QAReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QAReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QAReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
