let navbar = document.querySelector('#header .navbar');

window.onscroll = () => {
  navbar.classList.remove('active');

  if(window.scrollY > 0){
      document.getElementById('header').classList.add('active');
  }else{
      document.getElementById('header').classList.remove('active');
  }
};

window.onload = () =>{
  if(window.scrollY > 0){
      document.getElementById('header').classList.add('active');
  }else{
      document.getElementById('header').classList.remove('active');
  }
};

// hero section
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// review swiper
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });