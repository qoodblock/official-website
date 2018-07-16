$(function(){ 
 var $body = $('body');
 var windowHeight = $(window).height();
 var setCoverOpacity = function() {
 	$('.tm').css({ 
	  opacity: ((($(window).scrollTop() / windowHeight * 1.5) > 0.9) ? 0.9 : ($(window).scrollTop() / windowHeight *1.5)) 
	})
	$('.bgGray').stop().animate({ 
	  opacity: (($(window).scrollTop() > 3800) ? 1 : 0) 
	}, 100)
	$('.bgWhite').stop().animate({ 
	  opacity: (($(window).scrollTop() > 3800) ? 0 : 1) 
	}, 100)
	$('.yqB').css({ 
	  display: (($(window).scrollTop() > 3800) ? 'none' : 'inline-block') 
	})
	$('.yqW').css({ 
	  display: (($(window).scrollTop() > 3800) ? 'inline-block' : 'none') 
	})
	$('.yqImg').css({ 
	  display: ($(window).scrollTop() > 3800 ? 'inline-block' : 'none')
	})
	$('.bgGray2').css({ 
	  opacity: (((($(window).scrollTop() - 4400) / windowHeight) > 0.9) ? 0 : 1 - (($(window).scrollTop() - 4500) / windowHeight)) 
	})
	$('.bgGray3').stop().animate({
		opacity: (($(window).scrollTop() > 5600) ? 0 : 1)
	}, 100);
	$('.bgFA3').stop().animate({ 
	  opacity: (($(window).scrollTop() > 5600) ? 1 : 0) 
	}, 100);
	$('.teamW').css({ 
	  display: ($(window).scrollTop() > 5600 ? 'none' : 'inline-block')
	})
	$('.teamB').css({ 
	  display: ($(window).scrollTop() > 5600 ? 'inline-block' : 'none')
	})
	$('.bgFA4').css({ 
	  opacity: (((($(window).scrollTop() - (5800 + windowHeight)) / (windowHeight - 600)) > 0.9) ? 0 : 1 - (($(window).scrollTop() - (5800 + windowHeight)) / (windowHeight - 600))) 
	}) 
 } 
//初始化设置背景透明度 
 setCoverOpacity(); 
//监听滚动条事件，改变透明度 
 $(window).scroll(function() { 
  setCoverOpacity(); 
 }); 
})
function openPdf(language) {
  if (language === 'cn') {
    window.open("./static/QoodBlockWP3.8CN.pdf");
  } else {
    window.open("../static/QoodBlockWP3.8EN.pdf");
  }
};
