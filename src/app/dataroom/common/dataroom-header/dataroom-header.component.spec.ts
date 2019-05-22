import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataroomHeaderComponent } from './dataroom-header.component';

describe('DataroomHeaderComponent', () => {
  let component: DataroomHeaderComponent;
  let fixture: ComponentFixture<DataroomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataroomHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataroomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
