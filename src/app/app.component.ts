import { Component } from '@angular/core';
import { Resume } from './app.model';

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
    public static display: boolean;
  };

  showDialog() {
    this.model.display = true;
  }

  events1: any[];

  events2: any[];

  ngOnInit() {
    this.events1 = [
      {
  
        date: '2017 +',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        company: 'Sqad',
        position: 'UI Designer/Developer',
        summary:
          'UI designer and developer who was responsible for refactoring the design of new application. Utilizing Figma/XD for wireframe concepts, and would pitch features weekly. Wrote our own styles guides and component libraries for an enterprise level application. Many features integrated, but implemented dark, light, and black mode design for this app. The design has been through many refactors and implemented so many features for this application',
        img_thumb: 'https://rs-brown.com/images/thumbs/fender-thumb.jpg',
        img: 'https://rs-brown.com/images/info/fender/fender-3.jpg',
      },
      {
  
        date: '2014-2015',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        company: 'Fender',
        position: 'Sr Interactive Designer',
        summary:
          'Designed Fender owned websites, applications, and internal feature pages, often with very tight deadlines. My work also included the biggest migration of all six Fender sites to an all-responsive framework. All sites were responsive designs utilizing mobile first approach. Tools used for the design side UI were Photoshop/XD',
        img_thumb: 'https://rs-brown.com/images/thumbs/fender-thumb.jpg',
        img: 'https://rs-brown.com/images/info/fender/fender-3.jpg',
      },
      {
        status: 'Processing',
        date: '2012-2014',
        icon: PrimeIcons.COG,
        color: '#673AB7',
        company: 'SheKnows',
        position: 'Sr. UI/UX Design/Developer',
        summary:
          'Originally hired for the design team and then went to lead the UX team. Designed feature sites for SheKnows.com owned websites. Designed custom newsletters and woman magazines that were converted to online blogs. Designed Facebook site for ones of the greatest photographers in the world',
        img_thumb: 'https://rs-brown.com/images/thumbs/samsonite-thumb.jpg',
        img: 'https://rs-brown.com/images/info/fender/samsonite-2.jpg',
      },
 
    ];

  }
}
