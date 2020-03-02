/*
*
*
  @2019-qiusuo first page correlation js
*
*
*/

//   Have images navigation
function imgnavigation(){
	var one = document.getElementsByClassName('wods'); //图片
	var yy = document.getElementsByClassName('word');  //文字
	//t图片数组
	var firphoto=["./imgs/news.png","./imgs/dream2.png","./imgs/part_school2.png","./imgs/classics2.png","./imgs/party2.png"
					,"./imgs/look2.png","./imgs/nanphoto2.png","./imgs/subject2.png"];
	var firphototwo=["./imgs/newss.png","./imgs/dream.png","./imgs/part_school.png","./imgs/classics.png","./imgs/party.png"
					,"./imgs/look.png","./imgs/nanphoto.png","./imgs/subject.png"];
	//imgs时的变换		 
	for(var i=0;i<one.length;i++){
			one[i].index = i;
			one[i].onmouseenter = function(){
					  this.style.backgroundColor = "#2b6bcc";
					  this.style.backgroundImage ='url(' + firphoto[this.index] + ')';
					  yy[this.index].style.color="#2b6bcc";
		}
			one[i].onmouseleave = function(){
				      this.style.backgroundColor = "";
				      this.style.backgroundImage ='url(' + firphototwo[this.index] + ')';
					  yy[this.index].style.color="#000";
		}
	}
    //文字时的变换	  
	for(var i=0;i<yy.length;i++){
			yy[i].index = i;
			yy[i].onmouseenter = function(){
				      this.style.color="#2b6bcc"
					  one[this.index].style.backgroundColor = "#2b6bcc";
				      one[this.index].style.backgroundImage ='url(' + firphoto[this.index] + ')';
	}
			yy[i].onmouseleave = function(){
				      this.style.color="#000"
					  one[this.index].style.backgroundColor = "";
					  one[this.index].style.backgroundImage ='url(' + firphototwo[this.index] + ')';
		}
	}	
}imgnavigation();

/*
 *
  first page bottom rotations begin
 *
 */	
function goto(){
	var bot_mide = document.getElementsByClassName('bot_mide')[0];
	var conmain = document.getElementsByClassName('bphoto_md');
	var btUl = conmain[0].getElementsByTagName('ul')[0];
	var btLi = conmain[0].getElementsByTagName('li');
	var btleft = document.getElementsByClassName('b_btnlet')[0];
	var btright = document.getElementsByClassName('b_btnrgt')[0];
	var speeds = -1;  
	var timer = null;
	btUl.innerHTML += btUl.innerHTML; //复制ul子节点
	btUl.style.width = btLi[0].offsetWidth * btLi.length +'px'; //获取ul的宽度
	timer=setInterval(run,30); //定时器
	//鼠标移入停止定时器
	bot_mide.onmouseover = function(){
			clearInterval(timer);
		};
	//鼠标移开开启定时器
	bot_mide.onmouseout = function(){
			timer=setInterval(run,30);
		};
	//点击左箭头向左轮播
	btleft.onclick = function(){
			speeds = -1;
		}
	//点击右箭头向右轮播
	btright.onclick = function(){
			speeds = 1;
		}
	function run(){
		if(btUl.offsetLeft < -btUl.offsetWidth/2){
			btUl.style.left = '0';
		}else if(btUl.offsetLeft > 0){
			btUl.style.left = -btUl.offsetWidth/2 +'px';
		}
			btUl.style.left = btUl.offsetLeft + speeds + 'px';
	}
}goto();
		