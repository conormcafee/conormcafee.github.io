// Read More Button

$(".btn--continue").click(function(e) {
    $(this).addClass("btn--continue-active");
    $(".about--js").toggleClass("about--hidden about--visible");
    e.preventDefault();
});

// Employment JS

$("#js-0-title").click(function(e) {
    $(this).toggleClass("about__employment-link--active");
    $("#js-0").toggleClass("about__employment--js-active about__employment--js-inactive");
    $("#js-1, #js-2, #js-3").addClass("about__employment--js-inactive");
    $("#js-1-title, #js-2-title, #js-3-title").removeClass("about__employment-link--active");
    e.preventDefault();
});

$("#js-1-title").click(function(e) {
    $(this).toggleClass("about__employment-link--active");
    $("#js-1").toggleClass("about__employment--js-active about__employment--js-inactive");
    $("#js-0, #js-2, #js-3").addClass("about__employment--js-inactive");
    $("#js-0-title, #js-2-title, #js-3-title").removeClass("about__employment-link--active");
    e.preventDefault();
});

$("#js-2-title").click(function(e) {
    $(this).toggleClass("about__employment-link--active");
    $("#js-2").toggleClass("about__employment--js-active about__employment--js-inactive");
    $("#js-0, #js-1, #js-3").addClass("about__employment--js-inactive");
    $("#js-0-title, #js-1-title, #js-3-title").removeClass("about__employment-link--active");
    e.preventDefault();
});

$("#js-3-title").click(function(e) {
    $(this).toggleClass("about__employment-link--active");
    $("#js-3").toggleClass("about__employment--js-active about__employment--js-inactive");
    $("#js-0, #js-1, #js-2").addClass("about__employment--js-inactive");
    $("#js-0-title, #js-1-title, #js-2-title").removeClass("about__employment-link--active");
    e.preventDefault();
});