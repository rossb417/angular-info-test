import { Component } from '@angular/core';
import { Clients, Portfolio, Skillset } from './app.model';

import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public model = class {
    public static showInfo: boolean;
    public static skillset = Skillset;
    public static clients = Clients;
    public static portfolio = Portfolio;
    public static display: boolean;
  };

  showDialog() {
    this.model.display = true;
  }

  ngOnInit() {
   // this.model.portfolio = Portfolio.portfolio;
  }
}
