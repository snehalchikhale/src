import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityByFilesComponent } from './activity-by-files.component';

describe('ActivityByFilesComponent', () => {
  let component: ActivityByFilesComponent;
  let fixture: ComponentFixture<ActivityByFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityByFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityByFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
