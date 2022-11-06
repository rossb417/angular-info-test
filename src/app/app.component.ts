import { Component } from '@angular/core';
import { Clients, Portfolio, Resume, Skillset } from './app.model';

import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public model = class {
    public static showInfo: boolean;
    public static resumeInfo = Resume;
    public static skillset = Skillset.skillset;
    public static clients = Clients.clients;
    public static portfolio = Portfolio.portfolio;
    public static display: boolean;
  };

  showDialog() {
    this.model.display = true;
  }

  ngOnInit() {
   // this.model.portfolio = Portfolio.portfolio;
  }
}
