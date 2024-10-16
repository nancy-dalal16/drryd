//Scroll Animation
AOS.init();

gsap.from(".images img.car-img",{
  opacity:0,
  x:1500,
  delay:1,
})

gsap.from(".mobile-img img.car-img",{
  opacity:0,
  x:1500,
  delay:1,
})


gsap.from(".banner-content h1, .banner-content .para",{
  opacity:0,
  x:-1500,
  delay:1,
})
gsap.from(".banner-content .apple",{
  opacity:0,
  y:1000,
  delay:1,
})
gsap.from(".banner-content .play",{
  opacity:0,
  y:1000,
  delay:1,
})


// var tl = gsap.timeline()

gsap.from("#howit .container",{
  backgroundPosition:'500px 0',
  duration:1,
  scrollTrigger:{
    trigger:"#howit .container",
    scroller:"body",
    start:"top 60%"
  }
})
