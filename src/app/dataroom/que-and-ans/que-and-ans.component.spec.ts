import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueAndAnsComponent } from './que-and-ans.component';

describe('QueAndAnsComponent', () => {
  let component: QueAndAnsComponent;
  let fixture: ComponentFixture<QueAndAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueAndAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueAndAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
