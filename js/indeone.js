$(function(){
		/*
		 *2019 Qiusuo first page picture menu  
		 *
		 */
        //获取变量
	    var $imgs = $(".box ul li");
		var $btnleft = $("#btnleft");
		var $btnright = $("#btnright");
		var $cirst = $(".circle ul li");
		var $contain = $(".contain");
		
		//创建定时器
		var time = setInterval(change,2000);
		//鼠标移入清除定时器
		$contain.mouseenter(function(){
			clearInterval(time);
		});
		//鼠标移出
		$contain.mouseleave(function(){
			//先清除定时器
			clearInterval(time);
			//再开定时器
			time = setInterval(change,2000);
		});
		//定义一个函数
		function change(){
			//防止动画重复（防流氓动画）
			if($imgs.is(":animated")){
			     return;
			   }
			//点击又按钮当前图片淡出消失
			$imgs.eq(index).fadeOut(600);
			//信号量++
			index++;
			//边界判断
			if(index>length-1){
			     index=0;
			   }
			//下一张图片淡入显示
			$imgs.eq(index).fadeIn(600);
			
			//当前小圆点变色
			$cirst.eq(index).addClass("cur").siblings().removeClass("cur");
			
		}
		//获取所有li的长度（个数）
		var length = $imgs.length;
	    //定义信号量
		var index = 0;
		//又按钮点击事件
		$btnright.click(change);
		//做按钮点击事件
		$btnleft.click(function(){
			//防止动画重复（防流氓动画）
			if($imgs.is(":animated")){
			     return;
			   }
			//点击做按钮当前图片淡出消失
			$imgs.eq(index).fadeOut(600);
			//信号量--
			index--;
			
			//边界判断
			if(index<0){
			    index=length-1;
			   }
			//上一张图片淡入显示
			$imgs.eq(index).fadeIn(600);
			//当前小圆点变色
			$cirst.eq(index).addClass("cur").siblings().removeClass("cur");
		});
	
	    //小圆点事件
		$cirst.click(function(){
			//当前图片淡出消失
			$imgs.eq(index).stop(true).fadeOut(600);
			//重新获取信号量
			index = $(this).index();
			//移入的对应图片淡入显示
			$imgs.eq(index).stop(true).fadeIn(600);
			//小圆点对应变色
			$(this).addClass("cur").siblings().removeClass("cur");
			
		});
	
});