import { util } from './util.js';
import { like } from './like.js';
import { guest } from './guest.js';
import { theme } from './theme.js';
import { audio } from './audio.js';
import { offline } from './offline.js';
import { comment } from './comment.js';
import { progress } from './progress.js';
import { pagination } from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
    theme.init();
    audio.init();
    guest.init();
    offline.init();
    progress.init();
    pagination.init();
    window.AOS.init();

    window.like = like;
    window.util = util;
    window.guest = guest;
    window.theme = theme;
    window.audio = audio;
    window.comment = comment;
    window.pagination = pagination;

    fetch('assets/images/8clone.svg')
  .then(response => response.text())
  .then(data => {
    const svgContainer = document.getElementById('svg-container');
    svgContainer.innerHTML = data;

    const svg = svgContainer.querySelector('svg');

    // Function to adjust the SVG's dimensions and position
    function adjustSVGSize() {
      const containerRect = svgContainer.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();

      // Calculate the scaling factor to fit the SVG within the container
      const scaleFactor = Math.min(
        containerRect.width / svgRect.width,
        containerRect.height / svgRect.height
      );

      // Update the SVG's width, height, and position
      svg.style.width = `${svgRect.width * scaleFactor}px`;
      svg.style.height = `${svgRect.height * scaleFactor}px`;
      svg.style.left = `${(containerRect.width - svgRect.width * scaleFactor) / 2}px`;
      svg.style.top = `${(containerRect.height - svgRect.height * scaleFactor) / 2}px`;
    }

    // Call the adjustSVGSize function when the page loads and on window resize
    window.addEventListener('load', adjustSVGSize);
    window.addEventListener('resize', adjustSVGSize);

    const timeline = anime.timeline({
      easing: 'easeOutElastic(1, .8)',
      loop: true
    });

    timeline
      .add({
        targets: '#svg-container svg',
        translateX: [
          { value: -700, duration: 1000, delay: 500 },
        ],
        scaleX: [
          { value: 1, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 },
          { value: 1, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 }
        ]
      })
      .add({
        targets: '#svg-container svg',
        translateX: [
          { value: -1200, duration: 1000, delay: 500 }
        ],
        scaleX: [
          { value: 1, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 },
          { value: 1, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 }
        ]
      });
  })
  .catch(error => console.error('Error loading SVG:', error));
});



