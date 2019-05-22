import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarkSettingComponent } from './watermark-setting.component';

describe('WatermarkSettingComponent', () => {
  let component: WatermarkSettingComponent;
  let fixture: ComponentFixture<WatermarkSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermarkSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermarkSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
