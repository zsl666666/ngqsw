$(function(){
/**
  *2019 Qiusuo first page tab control 
  *
 */
function control(){
	var peofaith_titm = $('.peofaith_titm');
	var peofaithli = $('.peofaith_titm li');
	var m_one = $('.m_one');
	peofaith_titm.on('mousemove','.peo_oli',function(){ 
	    var  peo_index = $(this).index();
		m_one.hide();
		peofaithli.removeClass('set');
		m_one.eq(peo_index).show();
		$(this).addClass('set');
    });
}	
control();
gotop();
function moveomit(){
    var stuitem = document.getElementsByClassName('stuitem');
    for(var j=0;j<stuitem.length;j++){
        var elemt = stuitem[j];
        var stext = elemt.innerHTML;
        var b = stext.toString();
        var  shgt = elemt.offsetHeight;
        for(let i=0; i<b.length+1; i++){
            elemt.innerHTML = b.substr(0,i);
            if(shgt < elemt.scrollHeight){
            elemt.innerHTML = b.substr(0,i-2) + '...';
            break;
            }
        }
    }
}moveomit();			 
    				
//返回顶部
function gotop(){
	$(window).scroll(function() {
		 var sx = $(window).scrollTop();
   /* 判断滚动条 距离页面顶部的距离 500可以自定义*/
        if(  sx > 500) {
            $(".totop").fadeIn(100); /* 这里用.show()也可以,只是效果不好看 */
        } else {
            $(".totop").fadeOut(200);
        }
     });
     /* 给图片元素绑定 回到顶部的事件 */
     $(".totop").on("click", function() {
          $('body,html').animate({scrollTop: 0}, 600);
          return false;
     });
 }
}) 

	