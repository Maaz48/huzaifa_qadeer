var animationDesignA = document.getElementById("animationDesignA");
var animationDesignB = document.getElementById("animationDesignB");
var mainBoxSectionB = document.getElementById("mainBoxSectionB");

mainBoxSectionB.addEventListener("mousemove", (e) => {
  if (animationDesignB) {
    var xDirection = e.clientX;
    var yDirection = e.clientY;
    animationDesignB.style.top = `${-50 + yDirection * 0.03}px`;
    animationDesignB.style.left = `${30 + xDirection * 0.03}px`;
  }
});
document.addEventListener("scroll", () => {
  let screenWidth = window.innerWidth;
  if (animationDesignA && 350 + window.scrollY * 0.3 < screenWidth - 200)
    animationDesignA.style.left = `${350 + window.scrollY * 0.3}px`;
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: window.innerWidth < 768 ? 1 : 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
