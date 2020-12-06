$(document).ready(function () {
  //點擊選單"首頁"顯示子選單,並收回其他同階層效果
  $('.menu-home').click(function (e) { 
    e.preventDefault();
    $('.menu-home').toggleClass('active');
    $('.menu-production').removeClass('active')
    $('.menu-tel').removeClass('active')
    $('.header-maim-menu-list').slideToggle().siblings().slideUp();
  });
    //點擊選單"產品介紹"顯示子選單,並收回其他同階層效果
  $('.menu-production').click(function (e) { 
    e.preventDefault();
    $('.menu-production').toggleClass('active');
    $('.menu-home').removeClass('active')
    $('.menu-tel').removeClass('active')
    $('.header-maim-menu-list2').slideToggle().siblings().slideUp();
  });
    //點擊選單"聯絡我們"顯示子選單,並收回其他同階層效果
  $('.menu-tel').click(function (e) { 
    e.preventDefault();
    $('.menu-tel').toggleClass('active');
    $('.menu-production').removeClass('active')
    $('.menu-home').removeClass('active')
    $('.header-maim-menu-list3').slideToggle().siblings().slideUp();
  });
  
  //滾動產生回頂部按鈕
  $(document).scroll(function () { 
     //滾動高度
    var scroH = $(document).scrollTop(); 
     //距離頂部大於100px時
    if(scroH <300){ 
      $('.top').addClass('scrolltop');
    }
    if(scroH >=300){ 
      $('.top').removeClass('scrolltop');
    }
 });
  //回頂部特效
 $('.top').click(function (e) { 
   e.preventDefault();
   $('html,body').animate({
     scrollTop:0},700);
   });
 

});





/*輪播設定*/ 
var mySwiper = new Swiper ('.swiper-container', {
 // Optional parameters
/*輪播方向, horizontal 水平,vertical 垂直*/
 direction: 'horizontal',
 /*循環播放*/
loop: true,
/*切換速度*/
speed:1000,
/*輪播效果 slide,fade,cube,coverflow,flip*/
effect:'cube',
/*自動撥放輪播*/
autoplay:{
	delay:800,
},
// If we need pagination
pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },	  
	  

});

/*燈箱*/
lightbox.option({
    'resizeDuration': 600,
    'wrapAround': false
  })