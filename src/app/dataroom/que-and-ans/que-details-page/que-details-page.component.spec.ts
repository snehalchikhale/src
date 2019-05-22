import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueDetailsPageComponent } from './que-details-page.component';

describe('QueDetailsPageComponent', () => {
  let component: QueDetailsPageComponent;
  let fixture: ComponentFixture<QueDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
