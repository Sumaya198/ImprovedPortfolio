$(document).ready(function(){

  
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
         $('.sticky').addClass("stickyadd");
        }else{
         $('.sticky').removeClass("stickyadd");
        }
    })

  var typed = new Typed(".element",{
      strings: ["Sumaya Hassan", "A Web Developer", "A Graphic Designer"],
      smartBackspace: true,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      startDelay: 1000,
  });

  var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '80%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});


  // owl carousel

  
    $(".owl-carousel").owlCarousel({
       loop:true,
       autoplay:true,
       autoplayTimeout: 4000,
       items: 1
    });
 
    $('a').smoothScroll({

      speed:2000,
    });

});