
AOS.init();


  //navbar scroll

  var halfWindow = window.innerHeight / 10;

  var lastScroll = 0;
  var headerNav = document.querySelector("nav");
  var linksNav = document.querySelectorAll('.links_nav');
  
  window.addEventListener("scroll", function(){
    var scrolled = window.scrollY;
    if (scrolled >= halfWindow) {
      headerNav.classList.add('active');
      linksNav.forEach(function(link) {
        link.classList.add('active1');
      });
    } else {
      headerNav.classList.remove('active');
      linksNav.forEach(function(link) {
        link.classList.remove('active1');
      });
    }
    lastScroll = scrolled;
  });

 //loader wrapper
 window.addEventListener('load', function() {
  var loader = document.getElementById('loader-wrapper');
  setTimeout(function() {
    loader.classList.add('fade');
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1000); 
  }, 2700);
});


//scroll section

document.querySelector('.pajaro').addEventListener('click', function() {
   
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition >= window.innerHeight / 10) {
    var div = document.querySelector('.pajaro');
    div.style.opacity = '1';
    var div2 = document.querySelector('.share-button');
    div2.style.opacity = '1';
    div2.classList.add('gelatine');
  }
  else {
      var div = document.querySelector('.pajaro');
      div.style.opacity = '0';
      var div2 = document.querySelector('.share-button');
      div2.style.opacity = '0';
      div2.classList.remove('gelatine');
    }
});

//rotating logo footer


const rotatingJoinUs = document.getElementById('rotating_join_us');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activebird'); 
    } else {
      entry.target.classList.remove('activebird'); 
    }
  });
});

observer.observe(rotatingJoinUs);


document.addEventListener("DOMContentLoaded", function() {
  const portraits = document.querySelectorAll('.portrait');
  const individualTexts = document.querySelectorAll('.individual_text');

  window.addEventListener('scroll', () => {
    portraits.forEach(portrait => {
      if (isElementInViewport(portrait)) {
        portrait.classList.add('visible');
      } else {
        portrait.classList.remove('visible');
      }
    });

    individualTexts.forEach(individualText => {
      if (isElementInViewport(individualText)) {
        individualText.classList.add('visibletext');
      } else {
        individualText.classList.remove('visibletext');
      }
    });
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});

//burgermenu 

const menu = document.querySelector('.menu');
const linksright = document.querySelector('.links_nav_right')

menu.addEventListener('click', function() {
  this.classList.toggle('open');
  linksright.classList.toggle('center')
});


lightGallery(document.getElementById('static-thumbnails'), {
  animateThumb: false,
  zoomFromOrigin: false,
  allowMediaOverlap: true,
  toggleThumb: true,
});

lightGallery(document.getElementById('relative-caption'), {
  subHtmlSelectorRelative: true,
});



