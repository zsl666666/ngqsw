$(function(){  
	 
	/*
	 *2019 Qiusuo learning materials 
	 *
	 */
	
       var stu_nei = $('.stu_nei');
	   var left_btn = $('.left_btn');
	   var right_btn = $('.right_btn');
	   var stu_every = $('.stu_every');
	   var stu_width = $('.stumate').width();//获取总体区块宽度
	   var stuli = stu_every.width(); //获取每个内容区div的宽度
	   var stu_con = Math.ceil(stu_width/stuli);//向上取整总体区能容下多少个内容区div
	   var count = stu_every.length - stu_con;//向左能移动的最大内容区div个数
	   var fat = 3; //定义开始变量
	   var index=3;//定义开始信号量
		if($(window).width()<768){
			stu_every.eq(0).nextAll().remove();
		  };
	   //点击左按钮触发事件
	   left_btn.click(function(){
		   //防动画重复
		   if(stu_nei.is(":animated")){
				return;
			};
		   //信号量--
		   index--;
		   //左边界判断
		   if(index<0){
			   index=0;
			   stu_nei.css('left','0');
		   }
		   //每次运动一个内容区div宽度，时间600ms
		   stu_nei.animate({'left':-stuli*index},600);
	   });
	   //点击右按钮触发事件
	   right_btn.click(function(){
		    //防动画重复
		   if(stu_nei.is(":animated")){
				return;
			};
		   //信号量++
		   index++;
		   //又边界判断
		   if(index > count){
			   index=count;
			   stu_nei.css('left',-stuli*index);
		   }
		   //每次运动一个内容区div宽度，时间600ms
		   stu_nei.animate({'left':-stuli*index},600);
	   });
});