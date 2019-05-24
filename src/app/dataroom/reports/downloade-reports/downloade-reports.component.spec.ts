import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadeReportsComponent } from './downloade-reports.component';

describe('DownloadeReportsComponent', () => {
  let component: DownloadeReportsComponent;
  let fixture: ComponentFixture<DownloadeReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadeReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
