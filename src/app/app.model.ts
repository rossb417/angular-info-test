import { Injectable } from '@angular/core';

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
          company: 'Fender',
          position: 'Sr Interactive Designer',
          summary:
            'Sr Interactive Designer at Fender (FMIC) during entire site refactor to demandware platform. The support, forums and content sites inherited the same front end technologies.The content site was built in codeigniter framework and was lead to restructuring the architecture to emcompass a faster build time by building fewer block templates that had documented classes which gave the designers multiple options to choose. Keeping the modular approach and help with rapid development, as well as keeping the content separate in language files from the code. This solved content updates without the use for the end user to go into any code files. I rewrote the entire css, as well as the majority of the codebase to seemlessly blend in with the new site while still maintaining optimal code. Also esponsible for fixing over a thousand bugs from the main Ecommerce store as well.',
          img_thumb: 'https://rs-brown.com/images/thumbs/fender-thumb.jpg',
          img: 'https://rs-brown.com/images/info/fender/fender-3.jpg',
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
