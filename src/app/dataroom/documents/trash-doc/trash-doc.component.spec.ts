import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashDocComponent } from './trash-doc.component';

describe('TrashDocComponent', () => {
  let component: TrashDocComponent;
  let fixture: ComponentFixture<TrashDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
