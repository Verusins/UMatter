//search bar toggle for smaller resolutions
searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

//login form toggle
loginForm = document.querySelector('.login-form-container');
loginForm.classList.toggle('active');
document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
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

