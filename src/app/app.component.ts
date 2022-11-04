import { Component, VERSION } from '@angular/core';

import { Resume } from './app.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public model = class {
    public static showInfo: boolean;
    public static resumeInfo = Resume;
  };

  public _combineResumeInfoData(column, row) {
    const mappedDataRow: string[] = [];
    column.forEach((columnEl) => {
      mappedDataRow.push(row[columnEl.field]);
    });
    return mappedDataRow;
  }
}
