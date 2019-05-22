import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAndPermissionComponent } from './user-and-permission.component';

describe('UserAndPermissionComponent', () => {
  let component: UserAndPermissionComponent;
  let fixture: ComponentFixture<UserAndPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAndPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAndPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
