jQuery(document).ready(function($) {
  $(window).load(function() {
    var bod = $("body").height();
    var win = $(window).height();
    var hom = $(".home-banner").height();
    var calc = win - bod;
    //if(calc > 0){
      var newHeight = hom + calc + 15; // current banner height, hom = 160 - 100; // 100 is padding
      //var newHeight = hom + calc - 39;
      //alert(newHeight);
      $(".home-banner").height(newHeight);
     //  }
});
  
  
  $(".btn_latest_news").click(function(){
    $(".slide-up").addClass("slider-show");
  });
  
  $('.latest_news_down').click(function() {
	    $(".slide-up").removeClass("slider-show");
  });
  
  $('.custom_tab .tab1').click(function() {
    if (!$(this).hasClass("selected")) {
       $(".custom_tab .tab2").removeClass("selected");
       $(this).addClass("selected");
       $("#tab-content2").addClass("hide");
       $("#tab-content1").removeClass("hide");
    }
  });
  $('.custom_tab .tab2').click(function() {
    if (!$(this).hasClass("selected")) {
       $(".custom_tab .tab1").removeClass("selected");
       $(this).addClass("selected");
       $("#tab-content1").addClass("hide");
       $("#tab-content2").removeClass("hide");
    }
  });
  
  /* remove -  mobile swiping event from gallery page */
/*  $(document).on('swipeleft swiperight', '.selector', function(event) {
 			event.stopPropagation();
 			event.preventDefault();
	});  */
  
  
  // Code to fix mobile chrome jumping for Gallery image
     var elmnt = $(".sec-gallery .et_pb_gallery_image img");
     //var section_2=$(".portfolio-first-section");
     $(window).resize("resizeBackground");
     function resizeBackground() {
     width = $( window ).width();
     if(width <= 979){
      ht = $(window).height() * 0.21;
       elmnt.css('min-height', ht);
     }}
     resizeBackground();
  
  jQuery('.sec-gallery .et_pb_gallery_image a').removeAttr('title');
  
  
  
  //Code for sub menu
  
     var flag=0;
     var position=$(document).height();
    classAdder();
   if ($(this).scrollTop()>$('.first-section').outerHeight()) {
     unstickSubmenu();
}
     
$(window).scroll(function() {
   classAdder();
 var first=$('.first-section'),
  hH = $(first).outerHeight(),
  wS = $(this).scrollTop(),
  sH=$('#sub-menu').outerHeight(),
  bM=hH-sH;
  
  if((wS<bM)&&(flag==1)){
  stickSubmenu();
  }
  else
  if ((wS>=bM)&&(flag==0)){
     unstickSubmenu(); 
  } 
  
});
//function for add classes
function classAdder(){
 var page = $("html, body");
    var cur_pos = $(this).scrollTop(),
    sections = $('.sc-section'),
    nav_height=200,
    body=$('body');
sections.each(function() {
var top = $(this).offset().top-nav_height;
var nav= $('nav');
var bottom = top + $(this).outerHeight();
if (cur_pos >= top && cur_pos <= bottom) {
body.find('div').removeClass('sc_active');
//add class sc_active for current section that contain sc_section class
$(this).addClass("sc_active");
//add 'subActive' for sub menu
nav.find('a').removeClass('subActive').parent('li').removeClass('menu__item--current');
nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('subActive').parent('li').addClass('menu__item--current');
  if($('.menu__item').hasClass('menu__item--current')) $('.menu__line').slideDown();
  else 
    $('.menu__line').slideUp();
}
   });

}
//function for stick sub menu on page to avoid overlap with footer
function stickSubmenu(){
flag=0;
 // alert("stick");
//$(".menu__item img").fadeIn('1000');
  $(".menu__item img").css('opacity' , '1');
$("#sub-menu").css({"position":"absolute","bottom":"0","top":"initial","border-top":"none","opacity":"0.8"});
//$('#find-us').removeClass("sc_active");
 $("a.menu__link h3").css('margin-top' , '0px');
return;
}
function unstickSubmenu(){
//  alert("un");
flag=1;
 // $(".menu__item img").fadeOut('1000');
  $(".menu__item img").css('opacity' , '0');
$("a.menu__link h3").css('margin-top' , '-38px');
$("#sub-menu").css({"position":"fixed","bottom":"initial","top":"67px","border-top":"3px solid #82000a","opacity":"1"});  
return;
}  var cn=1;
    // Code to add new field in Schedule a tour
 $(".plus").click(function(){ 
    var text=$('<div class="extra"><div class="st-child-name">Child\'s Name<br><span class="wpcf7-form-control-wrap child-name"><input type="text" name="child-name-'+cn+'" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"></span></div><div class="st-child-age">Child\'s Age<br><span class="wpcf7-form-control-wrap child-age"><input type="number" name="child-age-'+cn+'"" value="" class="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number" min="1" max="15" aria-required="true" aria-invalid="false"></span></div><input type="text" name="cn" value="'+cn+'" size="40" class="wpcf7-form-control wpcf7-text hide" aria-required="true" aria-invalid="false"></div>');
$(".plus").parent().before(text);
   cn=cn+1;
  $(".minus").show();
});
 
 $(".minus").on('click',function(){
cn=cn-1;
if(cn==1) $(".minus").hide();
 $(".more-child").prev(".extra").remove();
 });
});