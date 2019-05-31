import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watermark-setting',
  templateUrl: './watermark-setting.component.html',
  styleUrls: ['./watermark-setting.component.css']
})
export class WatermarkSettingComponent implements OnInit {

  constructor() { }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  ngOnInit() {
  }

}
