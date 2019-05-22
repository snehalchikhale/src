import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotViewDocumentsComponent } from './not-view-documents.component';

describe('NotViewDocumentsComponent', () => {
  let component: NotViewDocumentsComponent;
  let fixture: ComponentFixture<NotViewDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotViewDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotViewDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
