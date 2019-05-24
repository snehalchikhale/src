import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexReportsComponent } from './index-reports.component';

describe('IndexReportsComponent', () => {
  let component: IndexReportsComponent;
  let fixture: ComponentFixture<IndexReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
