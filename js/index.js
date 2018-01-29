// function $(id){
// 	return document.getElementById(id)
// }

// window.onscroll = function(){ //绑定scroll事件
//     var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取滚动距离
//     var susGotop =$( "susGotop" ); //查询并定义div元素
//     if( t >= 500 ) { //判断
//         susGotop.style.display = "block"; 
//     } else { 
//         susGotop.style.display = "none"; 
//     } 
// }
// window.onload=function(){
//      var susGotop =$( "susGotop" );
//      susGotop.style.display = "none";
    
// }
(function($){
      // 多库共存
    $.noConflict();
    //轮播图效果
    $(function(){
  
 var i=0;
 var timer=null;

 var firstimg=$('.ovf li').first().clone(); //复制第一张图片

 $('.ovf').append(firstimg).width($('.ovf li').length*($('.ovf img').width())); 
 //第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
 //下一个按钮
 $('.right-btn').click(function(){
      i++;
  
      if (i==$('.ovf li').length-1) {

          i=0; //这里不是i=0
          $('.ovf').css({left:0});
       //保证无缝轮播，设置left值
      };
       
      $('.ovf').stop().animate({left:-i*950},100);

      if (i==$('.banner-top li').length - 3) { //设置小圆点指示

        $('.point li').eq(0).addClass('active').siblings().removeClass('active');

      }else{

        $('.point li').eq(i).addClass('active').siblings().removeClass('active');

       }
   })
  
 //上一个按钮
 $('.left-btn').click(function(){
      i--;
      if (i==-1) {
         i=$('.ovf li').length-2;
        $('.ovf').css({left:-($('.ovf li').length-1)*950});
      }
      $('.ovf').stop().animate({left:-i*950},300);
      $('.point li').eq(i).addClass('active').siblings().removeClass('active');
     })
      //鼠标划入圆点
      $('.point li').mouseover(function(){
       var _index=$(this).index();
       $('.ovf').stop().animate({left:-_index*950},150);
       $('.point li').eq(_index).addClass('active').siblings().removeClass('active');
 })
 //定时器自动播放
 timer=setInterval(function(){
         i++;
      if (i==$('.ovf li').length) {
      i=1;
         $('.ovf').css({left:0});
      };
        $('.ovf').stop().animate({left:-i*950},300);
      if (i==$('.ovf li').length-1) { 
         $('.point li').eq(0).addClass('active').siblings().removeClass('active');
      }else{
         $('.point li').eq(i).addClass('active').siblings().removeClass('active');
      }
 },3000)
 //鼠标移入，暂停自动播放，移出，开始自动播放
 $('.banner').hover(function(){ 
    clearInterval(timer);
 },function(){
        timer=setInterval(function(){
        i++;
      if (i==$('.ovf li').length) {
            i=1;
          $('.ovf').css({left:0});
      };
      
      $('.ovf').stop().animate({left:-i*950},300);
      if (i==$('.ovf li').length-1) { 
        $('.point li').eq(0).addClass('active').siblings().removeClass('active');
      }else{
         $('.point li').eq(i).addClass('active').siblings().removeClass('active');
      }
     },3000)
 })
  });
})(jQuery);
    
