import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLaPermissionComponent } from './manage-la-permission.component';

describe('ManageLaPermissionComponent', () => {
  let component: ManageLaPermissionComponent;
  let fixture: ComponentFixture<ManageLaPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLaPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLaPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
