import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDownloadDocumentsComponent } from './not-download-documents.component';

describe('NotDownloadDocumentsComponent', () => {
  let component: NotDownloadDocumentsComponent;
  let fixture: ComponentFixture<NotDownloadDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotDownloadDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDownloadDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
