$(function() {
  var navbar = document.querySelector(".navbar")
window.addEventListener("scroll",function(){
  var magura = window.scrollY;
  if(magura>100){
    navbar.classList.add("kushtia")
  }
  else{
    navbar.classList.remove("kushtia")
  }
})
})


$(function(){    
$('.banar_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows:false,
    prevArrow:'<i class="fa-solid fa-angle-left banar_prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right banar_next"></i>',
    // fade: false,
  });
  $('.post_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-angle-left post_prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right post_next"></i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  })
  // mixit up part
  var mixer = mixitup('.mixup_project');
  // venobox
  new VenoBox({
    autoplay:true,
    bgcolor:"blue",
    maxWidth:"70%",
    border:"4px",
    spinColor:"black",
    spinner:"grid",
    ratio:"21x9",
  });
  // counter up
  $('.likhon').counterUp({
    delay: 50,
time: 2000,
});
})

var options = {"particles":{"number":{"value":99,"density":{"enable":true,"value_area":552.4033491425909}},"color":{"value":["#de07fa", "#f57302", "0a34f1"]},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":70,"height":100}},"opacity":{"value":.8,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":7,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5782952832645452,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":150,"line_linked":{"opacity":1.5}},"bubble":{"distance":200,"size":40,"duration":2,"opacity":2,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false};
particlesJS("particle", options);



window.addEventListener("load", function(){
  var prealoder = this.document.querySelector(".prealoder");
  prealoder.classList.add("hide")
})
