import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPrintDocumentsComponent } from './not-print-documents.component';

describe('NotPrintDocumentsComponent', () => {
  let component: NotPrintDocumentsComponent;
  let fixture: ComponentFixture<NotPrintDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotPrintDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotPrintDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
