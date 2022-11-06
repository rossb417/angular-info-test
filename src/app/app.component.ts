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
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg',
        company: 'Fender',
        position: 'Sr Interactive Designer',
        summary:
          'Sr Interactive Designer at Fender (FMIC) during entire site refactor to demandware platform. The support, forums and content sites inherited the same front end technologies.The content site was built in codeigniter framework and was lead to restructuring the architecture to emcompass a faster build time by building fewer block templates that had documented classes which gave the designers multiple options to choose. Keeping the modular approach and help with rapid development, as well as keeping the content separate in language files from the code. This solved content updates without the use for the end user to go into any code files. I rewrote the entire css, as well as the majority of the codebase to seemlessly blend in with the new site while still maintaining optimal code. Also esponsible for fixing over a thousand bugs from the main Ecommerce store as well.',
        img_thumb: 'https://rs-brown.com/images/thumbs/fender-thumb.jpg',
        img: 'https://rs-brown.com/images/info/fender/fender-3.jpg',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: PrimeIcons.COG,
        color: '#673AB7',
        company: 'Samsonite Store 2012',
        position: 'UI/UX Design',
        summary:
          'Design for the new Samsonite Shop for the new US store. This project took about 3 months, including wireframes and designs for all pages of the ecommerce store. There were multiple wires and prototypes delivered to the client for AB testing. Each page resulted in the optimal UX flow that was decided to be the final prototype of each of the home, category landing, search landing, product landing pages, product detail pages and the entire checkout process. This was based on the amazon webstore 2.0 system.',
        img_thumb: 'https://rs-brown.com/images/thumbs/samsonite-thumb.jpg',
        img: 'https://rs-brown.com/images/info/fender/samsonite-2.jpg',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: PrimeIcons.ENVELOPE,
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: PrimeIcons.CHECK,
        color: '#607D8B',
      },
    ];

    this.events2 = ['2020', '2021', '2022', '2023'];
  }
}
