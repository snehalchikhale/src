import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedDisclaimersComponent } from './signed-disclaimers.component';

describe('SignedDisclaimersComponent', () => {
  let component: SignedDisclaimersComponent;
  let fixture: ComponentFixture<SignedDisclaimersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedDisclaimersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedDisclaimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
