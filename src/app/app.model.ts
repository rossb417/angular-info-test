import { Injectable } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

export const Skillset = [
    {
      class: 'skillset',
      header: '',
      columns: [
        {
          heading: 'Tools/Software',
          data: [
            { line: 'Visual Studio, Eclipse' },
            { line: 'Figma, XD' },
            { line: 'Github, GitBucket, Tower' },
            { line: 'Photoshop, Illustrator, After Effects' },
          ],
        },
        {
          heading: 'Frameworks/CMS',
          data: [
            { line: 'Angular 12+, Vue' },
            { line: 'Demandware/Salesforce, Shopify' },
            { line: 'Wordpress' },
            { line: 'Cake PHP/Smarty, Codeigniter' },
          ],
        },

        {
          heading: 'Libraries',
          data: [
            { line: 'LESS / SASS' },
            { line: 'Primeflex, Tailwind' },
            { line: 'Bootstrap / Foundation' },
          ],
        },
      ],
    },
  ];


export const Portfolio = [
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

export const Clients = [
    {
      class: 'clients',
      header: 'Clients I have worked for/with',
      images: [
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/fender.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/motorola.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/sheknows.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/bo.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/jackson.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/mtv.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/samsonite.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/parkn.png',
        },
      ],
    },
  ];

/*
export const Resume = {
  clients: [
    {
      class: 'clients',
      header: 'Clients I have worked for',
      images: [
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/fender.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/motorola.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/sheknows.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/bo.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/jackson.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/mtv.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/samsonite.png',
        },
        {
          img_thumb: 'https://rs-brown.com/images/clients/thumbs/parkn.png',
        },
      ],
    },
  ],

  portfolio: [
    {
      class: 'portfolio',
      header: '',
      data: [
        {
          company: 'Fender',
          position: 'Sr Interactive Designer',
          summary:
            'Sr Interactive Designer at Fender (FMIC) during entire site refactor to demandware platform. The support, forums and content sites inherited the same front end technologies.The content site was built in codeigniter framework and was lead to restructuring the architecture to emcompass a faster build time by building fewer block templates that had documented classes which gave the designers multiple options to choose. Keeping the modular approach and help with rapid development, as well as keeping the content separate in language files from the code. This solved content updates without the use for the end user to go into any code files. I rewrote the entire css, as well as the majority of the codebase to seemlessly blend in with the new site while still maintaining optimal code. Also esponsible for fixing over a thousand bugs from the main Ecommerce store as well.',
          img_thumb: 'https://rs-brown.com/images/thumbs/fender-thumb.jpg',
          img: 'https://rs-brown.com/images/info/fender/fender-3.jpg',
        },
        {
          company: 'Samsonite Store 2012',
          position: 'UI/UX Design',
          summary:
            'Design for the new Samsonite Shop for the new US store. This project took about 3 months, including wireframes and designs for all pages of the ecommerce store. There were multiple wires and prototypes delivered to the client for AB testing. Each page resulted in the optimal UX flow that was decided to be the final prototype of each of the home, category landing, search landing, product landing pages, product detail pages and the entire checkout process. This was based on the amazon webstore 2.0 system.',
          img_thumb: 'https://rs-brown.com/images/thumbs/samsonite-thumb.jpg',
          img: 'https://rs-brown.com/images/info/fender/samsonite-2.jpg',
        },
        {
          company: 'Fender',
          position: 'Sr Interactive Designer',
          summary:
            'Sr Interactive Designer at Fender (FMIC) during entire site refactor to demandware platform. The support, forums and content sites inherited the same front end technologies.The content site was built in codeigniter framework and was lead to restructuring the architecture to emcompass a faster build time by building fewer block templates that had documented classes which gave the designers multiple options to choose. Keeping the modular approach and help with rapid development, as well as keeping the content separate in language files from the code. This solved content updates without the use for the end user to go into any code files. I rewrote the entire css, as well as the majority of the codebase to seemlessly blend in with the new site while still maintaining optimal code. Also esponsible for fixing over a thousand bugs from the main Ecommerce store as well.',
          img_thumb: 'https://rs-brown.com/images/thumbs/fender-thumb.jpg',
          img: 'https://rs-brown.com/images/info/fender/fender-3.jpg',
        },
      ],

      footer: [
        {
          footer: '',
        },
        {
          footer: '',
        },
      ],
    },
  ],

  skillset: [
    {
      class: 'skillset',
      header: '',
      columns: [
        {
          heading: 'Tools/Software',
          data: [
            { line: 'Visual Studio, Eclipse' },
            { line: 'balsamiq, Axure, Figma' },
            { line: 'Github, GitBucket, Tower' },
            { line: 'Photoshop, Illustrator, After Effects' },
          ],
        },
        {
          heading: 'Frameworks/CMS',
          data: [
            { line: 'Angular 7+, React, Vue' },
            { line: 'Demandware, Shopify, Amazon, Volusion' },
            { line: 'Wordpress , Joomla, EE' },
            { line: 'Cake PHP/Smarty 3, Codeigniter' },
          ],
        },

        {
          heading: 'Libraries',
          data: [
            { line: 'LESS / SASS' },
            { line: 'Primeflex' },
            { line: 'Bootstrap / Foundation' },
          ],
        },
      ],
    },
  ],
};
*/