// Smooth Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Read More Button

$(".btn--continue").click(function(e) {
    $(this).addClass("btn--continue-active");
    $(".about--js").toggleClass("about--hidden about--visible");
});

// Employment JS

$("#js-0-title").click(function(e) {
    $(this).toggleClass("about__employment-link--active");
    $("#js-0").toggleClass("about__employment--js-active about__employment--js-inactive");
    $("#js-1, #js-2, #js-3").addClass("about__employment--js-inactive");
    $("#js-1-title, #js-2-title, #js-3-title").removeClass("about__employment-link--active");
});

$("#js-1-title").click(function(e) {
    $(this).toggleClass("about__employment-link--active");
    $("#js-1").toggleClass("about__employment--js-active about__employment--js-inactive");
    $("#js-0, #js-2, #js-3").addClass("about__employment--js-inactive");
    $("#js-0-title, #js-2-title, #js-3-title").removeClass("about__employment-link--active");
});

$("#js-2-title").click(function(e) {
    $(this).toggleClass("about__employment-link--active");
    $("#js-2").toggleClass("about__employment--js-active about__employment--js-inactive");
    $("#js-0, #js-1, #js-3").addClass("about__employment--js-inactive");
    $("#js-0-title, #js-1-title, #js-3-title").removeClass("about__employment-link--active");
});

$("#js-3-title").click(function(e) {
    $(this).toggleClass("about__employment-link--active");
    $("#js-3").toggleClass("about__employment--js-active about__employment--js-inactive");
    $("#js-0, #js-1, #js-2").addClass("about__employment--js-inactive");
    $("#js-0-title, #js-1-title, #js-2-title").removeClass("about__employment-link--active");
});