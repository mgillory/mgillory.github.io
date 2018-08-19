$(document).ready(function ($) {
  var parPosition = [];
  $('.par').each(function () {
    parPosition.push($(this).offset().top);
  });

  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  $('.vNav ul li a').click(function () {
    $('.vNav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  $('.vNav a').hover(function () {
    $(this).find('.label').show();
  }, function () {
    $(this).find('.label').hide();
  });

  $(document).scroll(function () {
    var position = $(document).scrollTop(),
      index;
    for (var i = 0; i < parPosition.length; i++) {
      if (position <= parPosition[i]) {
        index = i;
        break;
      }
    }
    $('.vNav ul li a').removeClass('active');
    $('.vNav ul li a:eq(' + index + ')').addClass('active');
  });

  $('.vNav ul li a').click(function () {
    $('.vNav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  $('.skillbar').each(function(){
    var offset = '101' - $(this).attr('data-percent').split('%')[0] + '%';
    console.log(offset)
    $(this).find('.skill-bar-percent').css('right', offset)
		$(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
		},1500);
	});
});