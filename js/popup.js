$(document).ready(function(){
	window.setTimeout(function(){
		if($.cookie("visited") != "1")
			showRegisterPopup();
		$.cookie("visited","1",1);
	}, 3000);
})




$('.login-btn').click(function(){
	$('.login-box').addClass('login-box_show');
	$('.page').addClass('page-effect');






});


$('.login-close').click(function(){
	$('.login-box').removeClass('login-box_show');
	$('.page').removeClass('page-effect');






});

$('.login-box-overlay').click(function(){
	$('.login-box').removeClass('login-box_show');
	$('.page').removeClass('page-effect');


});






$('.register-btn').click(function(){
	$('.register-box').addClass('register-box_show');
	$('.page').addClass('page-effect');






});


$('.register-close').click(function(){
	$('.register-box').removeClass('register-box_show');
	$('.page').removeClass('page-effect');






});

$('.register-box-overlay').click(function(){
	$('.register-box').removeClass('register-box_show');
	$('.page').removeClass('page-effect');



});
