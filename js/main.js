


AOS.init();

  //navbar scroll

  var halfWindow = window.innerHeight / 10;

  var lastScroll = 0;
  var headerNav = document.querySelector("nav");
  var linksnav = document.querySelectorAll('.links_nav')
  
  window.addEventListener("scroll", function(){
    var scrolled = window.scrollY;
    if(scrolled >= halfWindow) {
      headerNav.classList.add('active');
     
     
    } else {
      headerNav.classList.remove('active');
    
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
  }, 3000);
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
  if (scrollPosition >= window.innerHeight / 2) {
    var div = document.querySelector('.pajaro');
    div.style.opacity = '1';
  }
  else {
      var div = document.querySelector('.pajaro');
      div.style.opacity = '0';
    }
});

