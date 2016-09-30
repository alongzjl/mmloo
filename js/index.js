$(function(){


	//大背景图右边的话费，机票 的变动设置
	$('.backgrr .backgrrc2 li a').mouseenter(function(){
		$(this).children('.backgrrc2b').css({color:'red'});
		$(this).children('.backgrrc2t').animate({top:'8px'},100);
		$(this).children('.backgrrc2t').animate({top:'18px'},100);
		$(this).parent().css({border:'1px solid red'});
	});
	$('.backgrr .backgrrc2 li a').mouseleave(function(){
		$(this).children('.backgrrc2b').css({color:'black'});
		$(this).parent().css({border:'1px solid #cdcdcd'});
	});
	
	
	//backg中间轮播图ul中每一个li的背景的设置
	$('.backgr .backgrc .backgrct li').each	(function(){
		var index = $(this).index();
		$(this).css({background:'url(img/backg'+(index+1)+'.fw.png)'});
	});
	$('.backgr .backgrc .backgrct li').eq(0).
	css({opacity:'1',filter:'alpha(opacity=100)'});
	//backg中间轮播效果的设置
	
	var backnum = 0;
	
	//backg中间轮播图前进后退按钮的淡入淡出的设置
		$('.backgr .backgrc').mouseover(function(){
				$(this).children('.backgrcleft').css({display:'block'});
				$(this).children('.backgrcright').css({display:'block'});
		});
		$('.backgr .backgrc').mouseout(function(){
				$(this).children('.backgrcleft').css({display:'none'});
				$(this).children('.backgrcright').css({display:'none'});
		});
		
		
		//backg中间轮播图前进后退的设置
		$('.backgr .backgrc .backgrcleft').click(function(){
			//关闭定时器
			clearInterval(timer1);
			//前进加1
			backnum -=1;
			console.log(5);
			//如果等于7让其回到初始位置
			if(backnum == 5){
				backnum = 1;
				$('.backgr .backgrc .backgrct').css({left:-(8280+322)+'px'});
			}
			//设置ul的top位置
			$('.backgr .backgrc .backgrct').css({left:-(1385*backnum+322)+'px'});
			$('.backgr .backgrc .backgrct li').eq(backnum).animate({opacity:'1'},1000)
			.delay(2000).animate({opacity:'0.2'},1000);
			//打开定时器
			timer1 = setInterval(backshow,4000);
		});
	//////
	//轮播图中下面列表的移入轮播图片定位的设置
	$('.backgr .backgrc .backgrcb li').mouseenter(function(){
		clearInterval(timer1);
		$('.backgr .backgrc .backgrct li').css({opacity:'1'});
		backnum = $(this).index();
		$('.backgr .backgrc .backgrct').css({left:-(1385*backnum+322)+'px'});
		$(this).find('a').css({opacity:'0.4'});
		$(this).siblings().find('a').css({opacity:'0.2'});
	
	});
	$('.backgr .backgrc .backgrcb li').mouseleave(function(){
		$(this).find('a').css({opacity:'0.2'});
		$('.backgr .backgrc .backgrct li').eq(backnum).css({opacity:'1'});
		$('.backgr .backgrc .backgrct li').eq(backnum).siblings().css({opacity:'0'});
		timer1 = setInterval(backshow,4000);
	});
	backshow();
	var timer1 = setInterval(backshow,4000);
	function backshow(){
		backnum++;
		
		if(backnum == 6){
			backnum = 0;
		}
		//设置轮播lu的left和a的淡入效果
		$('.backgr .backgrc .backgrct').css({left:-(1385*backnum+322)+'px'});
		$('.backgr .backgrc .backgrct li').eq(backnum).animate({opacity:'1'},1000)
		.delay(2000).animate({opacity:'0.2'},1000);
		$('.backgr .backgrc .backgrct li').eq(backnum).siblings().
		css({opacity:'0.2',filter:'alpha(opacity=20)'});
		$('.backgr .backgrc .backgrcb li').eq(backnum).find('a').css({opacity:'0.4'});
		$('.backgr .backgrc .backgrcb li').eq(backnum).siblings().find('a').
			css({opacity:'0.2'});
	}
	//backg中左侧的商品那一栏ul li商品商标的设置
	
	//backg中左侧的商品那一栏ul li的移入移出事件
	$('.backg .backgrl .backgoods .myli').mouseover(function(){
		var index = $(this).index();
		$(this).children('a').
		css({background:'black url(img/goods'+(index+1)+'.fw.png) no-repeat top left'});
		$(this).find('.goodslist').css({display:'block'});
	});
	$('.backg .backgrl .backgoods .myli').mouseout(function(){
		var index = $(this).index();
		$(this).children('a').css({background:''});
		$(this).find('.goodslist').css({display:'none'});
	});
	//backg中左侧的商品那一栏ul li的移入出现商品名称点击变红设置
	$('.backg .backgrl .backgoods .myli .goodslist a').mouseover(function(){
		$(this).css({color:'red'});
	});
	$('.backg .backgrl .backgoods .myli .goodslist a').mouseout(function(){
		$(this).css({color:'black'});
	});
	
	//特惠专区左侧移入变色设置
	$('.cheapbox .cheapbox1 .cheapboxlt li a').hover(function(){
		$(this).children('span:first').css({color:'red'});
	},
	function(){
		$(this).children('span:first').css({color:'black'});
	});
	
	//设置第二个span中的字体颜色为灰色
	$('.cheapbox .cheapbox1 .cheapboxlt span:odd').css({color:'#bbb'});
	
	$('.cheapbox .cheapbox1 .cheapboxlb li a').hover(function(){
		$(this).css({color:'red'});
	},
	function(){
		$(this).css({color:'black'});
	});
	//officegoods中最左边的li移入变色设置
	$('.officegoodsl .officegoodslt li a').hover(function(){
		$(this).css({color:'red'});
	},
	function(){
		$(this).css({color:'black'});
	});
	//officegoods中的右下角的Y方向上的轮播
	var timeroffice = setInterval(officeshow,3000);
	var officenum = 0;
	function officeshow(){
		officenum++;
		if(officenum == 7){
			officenum = 1;
			$('.officegoodsl .officegoodslb ul').css({top:'0px'});
		}
		$('.officegoodsl .officegoodslb ul').animate({top:-officenum*50 + 'px'},1000);
	}
	
	//officegoods中的右下角的Y方向上的轮播,向左向右前进后退设置
	$('.officegoodsl .officegoodslb .officeleft').click(function(){
		//关闭定时器
		clearInterval(timeroffice);
		//后退减一
		officenum -=1;
		//如果等于1让其回到最后
		if(officenum ==0){
			officenum =7;
			$('.officegoodsl .officegoodslb ul').css({top:'-350px'});
		}
		//设置ul的top位置
		$('.officegoodsl .officegoodslb ul').animate({top:-officenum*50 + 'px'},1000);
		//打开定时器
		timeroffice = setInterval(officeshow,3000);
	});
	$('.officegoodsl .officegoodslb .officeright').click(function(){
		//关闭定时器
		clearInterval(timeroffice);
		//前进加1
		officenum +=1;
		//如果等于7让其回到初始位置
		if(officenum == 7){
			officenum = 1;
			$('.officegoodsl .officegoodslb ul').css({top:'0px'});
		}
		//设置ul的top位置
		$('.officegoodsl .officegoodslb ul').animate({top:-officenum*50 + 'px'},1000);
		//打开定时器
		timeroffice = setInterval(officeshow,3000);
	});
	
	//.officegoodsr企业办公区楼梯中上面X方向的轮播
	var timerofficegoodsr = setInterval(officeshowol,4000);
	var officegoodsrnum = 0;
	function officeshowol(){
		officegoodsrnum++;
		if(officegoodsrnum == 5){
			officegoodsrnum = 1;
			$('.officegoodsr .officegoodsr1 .officeol ol').css({left:'0px'});
		}
		$('.officegoodsr .officegoodsr1 .officeol ol').animate(
			{left:-officegoodsrnum*389+ 'px'},1000);
	}
//.officegoodsr企业办公区楼梯中上面X方向的轮播,向左向右前进后退设置
	$('.officegoodsr .officegoodsr1 .officeol .officeolleft').click(function(){
		//关闭定时器
		clearInterval(timerofficegoodsr);
		//后退减一
		officegoodsrnum -=1;
		//如果等于1让其回到最后
		if(officegoodsrnum ==0){
			officegoodsrnum =4;
			$('.officegoodsr .officegoodsr1 .officeol ol').css({left:'-1945px'});
		}
		//设置ol的left位置
		$('.officegoodsr .officegoodsr1 .officeol ol').animate(
			{left:-officegoodsrnum*389+ 'px'},1000);
		//打开定时器
		timerofficegoodsr = setInterval(officeshowol,4000);
	});
		$('.officegoodsr .officegoodsr1 .officeol .officeolright').click(function(){
		//关闭定时器
		clearInterval(timerofficegoodsr);
		//后退减一
		officegoodsrnum +=1;
		//如果等于1让其回到最后
		if(officegoodsrnum ==5){
			officegoodsrnum =1;
			$('.officegoodsr .officegoodsr1 .officeol ol').css({left:'0px'});
		}
		//设置ol的left位置
		$('.officegoodsr .officegoodsr1 .officeol ol').animate(
			{left:-officegoodsrnum*389+ 'px'},1000);
		//打开定时器
		timerofficegoodsr = setInterval(officeshowol,4000);
	});
	
	//商品楼梯右边模块，最右边的移入移出响应设置
	$('#goodsr ul li p').mouseover(function(){
		$(this).parent().children('dl').stop().slideDown(300).end().siblings().children('dl').stop()
		.slideUp(300);
	});
	//移入到里面的h4的上面时字体颜色会变的设置
	$('#goodsr ul li dl dd h4').mouseover(function(){
		$(this).css({color:'#de6b2c'}).parent().parent().parent().siblings().find('h4').
		css({color:'black'});
	});
	$('#goodsr ul li dl dd h4').mouseout(function(){
		$(this).css({color:'black'});
	});
	
	//商品楼梯右边模块，下面的ul移入图片变动的设置
	$('.officegoodsr .officegoodsr3 li').mouseenter(function(){
		$(this).find('img').animate({top:'5px'},300);
	});
	$('.officegoodsr .officegoodsr3 li').mouseleave(function(){
		$(this).find('img').animate({top:'10px'},300);
	});
	//商品楼梯右边模块，下面的ul中的商品介绍文字p移入变色的设置
	$('.officegoodsr .officegoodsr3 li p').mouseover(function(){
		$(this).css({color:'#ff5c26'});
	});
	$('.officegoodsr .officegoodsr3 li p').mouseout(function(){
		$(this).css({color:'black'});
	});
//企业办公区的上面的标题栏移入出现相应的模块的设置
$('.officegoods .officegoodsr').children('.officegoodsrlist').eq(0).css({display:'block'}).
	siblings().css({display:'none'});
	
$('.officegoodsnav .officenavc li:eq(0)').find('a').css({background:'#4595c6',color:'white'});

$('.officegoodsnav .officenavc li').mouseover(function(){
	var index = $(this).index();
	$(this).find('a').css({background:'#4595c6',color:'white'}).end().siblings().find('a').css({background:'white',color:'black'});
	$('.officegoods .officegoodsr').children('.officegoodsrlist').eq(index).css({display:'block'}).
	siblings().css({display:'none'});
	
});

});

