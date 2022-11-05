import { Component } from '@angular/core';
import { Resume } from './app.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public model = class {
    public static showInfo: boolean;
    public static resumeInfo = Resume;
    public static display: boolean;
  };

  showDialog() {
    this.model.display = true;
  }
}
