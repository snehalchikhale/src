import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityByDateComponent } from './activity-by-date.component';

describe('ActivityByDateComponent', () => {
  let component: ActivityByDateComponent;
  let fixture: ComponentFixture<ActivityByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
