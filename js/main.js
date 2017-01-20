$(document).ready(function() {
  function getTargetTop(elem) {
    var id = elem.attr("href");
    var offset = 10;
    return $(id).offset().top - offset;
  }
  $('a[href^="#"]').click(function(event) {
    var target = getTargetTop($(this));
    $('html, body').animate({
      scrollTop: target
    }, 1100);
    event.preventDefault();
  });
  var sections = $('a[href^="#"]');

  function checkSectionSelected(scrolledTo) {
    var threshold = 150;
    var i;
    for (i = 0; i < sections.length; i++) {
      var section = $(sections[i]);
      var target = getTargetTop(section);
      if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
        sections.removeClass("active");
        section.addClass("active");
      }
    };
  }
  checkSectionSelected($(window).scrollTop());
  $(window).scroll(function(e) {
    checkSectionSelected($(window).scrollTop())
  });
  $('.navigation').prepend('<div id="menu-icon"></div>');
  $("#menu-icon").on("click", function() {
    if ($(document).width() < 581) {
      $(".nav").slideToggle();
      $(this).toggleClass("active");
    }
  });
  $('.nav li a').on('click', function() {
    console.log($(document).width());
    if ($(document).width() < 581) {
      $('.nav').slideToggle();
      $('.nav').toggleClass('active');
    }
  });
});
     
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});

