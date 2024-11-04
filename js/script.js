// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Load and animate the SVG
  fetch('assets/images/8clone.svg')
      .then(response => response.text())
      .then(data => {
          document.getElementById('svg-container').innerHTML = data;

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
                      { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
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
                      { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                      { value: 1, duration: 900 },
                      { value: 1, duration: 100, delay: 500, easing: 'easeOutExpo' },
                      { value: 1, duration: 900 }
                  ]
              });
      })
      .catch(error => console.error('Error loading SVG:', error));
});