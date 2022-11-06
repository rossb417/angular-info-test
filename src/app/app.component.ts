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
          'Sr Interactive Designer at Fender (FMIC) during entire site refactor to demandware platform. The support, forums and content sites inherited the same front end technologies.The content site was built in codeigniter framework and was lead to restructuring the architecture to emcompass a faster build time by building fewer block templates that had documented classes which gave the designers multiple options to choose. Keeping the modular approach and help with rapid development, as well as keeping the content separate in language files from the code. This solved content updates without the use for the end user to go into any code files. I rewrote the entire css, as well as the majority of the codebase to seemlessly blend in with the new site while still maintaining optimal code. Also esponsible for fixing over a thousand bugs from the main Ecommerce store as well.',
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
