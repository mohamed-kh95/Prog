/*global $, jQuery, alert */

$(document).ready(

	function () {
		"use strict";
        $("html").niceScroll();
	}
);

$(document).ready(function () {
	"use strict";
	$(".gear-cheak").click(function () {
		$(".colors").fadeToggle();
	});
    
//colors on click
	var colorLi = $(".colors ul li");
	colorLi
		.eq(0).css("backgroundColor", "#E41B17").end()
		.eq(1).css("backgroundColor", "#535353").end()
		.eq(2).css("backgroundColor", "#ff8900").end()
		.eq(3).css("backgroundColor", "#d02ab6").end()
		.eq(4).css("backgroundColor", "#2380ff");

	colorLi.click(function () {
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));
	});

	// Start Spin Loading
	$('.overlay-spin').innerHeight($(window).innerHeight());
	// End Spin Loading
});

var scrollButton = $("#scroll-top");
$(window).scroll(function () {
	"use strict";
	if ($(this).scrollTop() >= 700) {
		scrollButton.show();
	} else {
		scrollButton.hide();
	}
});
scrollButton.click(function () {
	"use strict";
	$("html,body").animate({scrollTop : 0}, 1000);
});
// Start Spin Loading
$(window).on('load', function () {
	$('.spinner').fadeOut(1000, function () {
		$(this).parent('.overlay-spin').fadeOut(1000, function () {
			$('body').css('overflow', 'auto');
		});
	});
});
// End Spin Loading


