//login form toggle
loginForm = document.querySelector('.login-form-container');
if (window.location.href.search(/login/) != -1) {
  loginForm.classList.toggle('active');
}
if (window.location.href.search(/sign-up/) != -1) {
  loginForm.classList.toggle('active');
}

//email subscription alert
function sendEmail() {
  alert("Email sent! (This is just a prototype and we are not sending anything to your actual email because of probable authentication issues, sorry for that.)");
}

//header deselector? whatever it's called to leave it behind
window.onscroll = () =>{
  searchForm.classList.remove('active');
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

//same as above
window.onload = () =>{
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

//slidey amotion for the home tab
var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides:true,
  autoplay: {
    delay: 6000,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

//slidey amotion for the featured tab (books of the week)
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides:true,
  autoplay: {
    delay: 6000,
    disableOnInteraction:false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides:true,
  autoplay: {
    delay: 6000,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
