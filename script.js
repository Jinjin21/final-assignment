// JavaScript

console.log('Hello world!');

const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');

// 確認
//console.log(main);
//console.log(thumbs);

thumbs.forEach(function(item, index) {
    item.onmouseover = function() {
      //console.log(this.dataset.image);
      main.src = this.dataset.image;
      const text = document.querySelector('#caption');
    }
  });

  // const show = (entries) => {
  //   const keyframes = {
  //     opacity: [0, 1],
  //     translate: ['200px 0',0]
  //   }
  //   entries[0].target.animate(keyframes,600);
  //   console.log(entries[0].target);
  // }

  // const observer = new IntersectionObserver(show);

  // observer.observe(document.querySelector('#IMG_0645.JPG'));

  const show = (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        const keyframes = {
          opacity: [0, 1],
          translate: ['0px 200px',0]
        }
        entry.target.animate(keyframes,900);
        //
        obs.unobserve(entry.target);
      }       
    });
  }
  
  const observer = new IntersectionObserver(show);

  
  //監視対象
  const images = document.querySelectorAll('.img');
  console.log(images);
  images.forEach(i =>{
    observer.observe(i);
  });
  
  