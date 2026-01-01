function loco(){
const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});
document.querySelectorAll("[data-scroll-to]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    scroll.scrollTo(link.getAttribute("href"));
  });
});
scroll.update();
let back = document.querySelector('.documentary-video');
let button = document.querySelector('.documentary-button button');

button.addEventListener('mousemove',function(){
    back.style.opacity = "1";
})
button.addEventListener('mouseleave',function(){
    back.style.opacity = "0";
})
}

loco();