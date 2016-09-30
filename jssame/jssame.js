$(function(){
		
	//用each jQuery函数来设置导航的背景
	$('.fixed ul li').each(function(){
		var index = $(this).index();
		$(this).children('a').css({background:'url(img/fix'+(index+1)+'.png)'});
	});
	
	//右边导航栏的移入事件，背景图片的设置
	$('.fixed ul li').mouseover(function(){
		var index = $(this).index();
		$(this).children('a').css({background:'url(img/fix'+(index+1)+'_'+(index+1)+'.fw.png)'});
	});
	
	//右边导航栏的移出事件，背景图片的设置
	$('.fixed ul li').mouseout(function(){
		var index = $(this).index();
		$(this).children('a').css({background:'url(img/fix'+(index+1)+'.png)'});
	});
	//返回顶部
$('.fixed ul li:eq(4)').click(function(){
	$('body,html').scrollTop(0);
});

		//获取到的商品信息在上面的展示区的样式设置

	//登录页面的用户信息
		var str = getCookie('submitnews');
		var stro = strToObj1(str);
		var subname = stro['name'];
	$('.header .sub1').find('span').html(subname);
	$('.backgrr .backgrrt p:eq(0)').find('span').html(subname);
	//header部分背景小箭头的设置
	$('.header .head_lead li ').find('.head_leada:first').css({background:'#f8f8f8 url(img/headlead.png) no-repeat top right'}).end().find('.head_leada:gt(0)').css({display:'none',background:'white'});
	//header下拉菜单移入背景变色设置
	$('.header .head_lead li ').find('.head_leada:gt(0)').hover(function(){
		$(this).css({background:'#f8f8f8'});
	},
	function(){
		$(this).css({background:'white'});
	});
	//header下拉菜单移入字体变色设置
	$('.header .head_lead li:gt(0)').find('.head_leada').hover(function(){
		$(this).css({color:'red'});
	},
	function(){
		$(this).css({color:'black'});
	});
	//header部分右边的移入移出事件
	$('.header .head_lead li ').mouseover(function(){
		$(this).find('.head_leada:first').css({background:'white url(img/headlead2.fw.png) no-repeat top right'}).
		end().children('.head_lead1').css({display:'block'}).end().find('.head_leada:gt(0)').css({display:'block'});
	});
	$('.header .head_lead li').mouseout(function(){
		$(this).find('.head_leada:first').css({background:'#f8f8f8 url(img/headlead.png) no-repeat top right'}).
		end().find('.head_lead1').css({display:'none'}).end().find('.head_leada:gt(0)').css({display:'none'});
	});
	//登录注册移入变色设置
	$('.backgrr .backgrrc a').mouseover(function(){
		$(this).css({color:'red'});
	});
	$('.backgrr .backgrrc a').mouseout(function(){
		$(this).css({color:'black'});
	});
	//inputdiv右边的a链接图片的背景的设置，用each来做较为方便
	$('.inputdivr .inputdivronly li').each	(function(){
		var index = $(this).index();
		$(this).children('a').css({background:'url(img/inputdivr'+(index+1)+'.png)'});
	});
	
	//goods商品栏li目录第一个首页设置为红色
	$('.goods .goodsc li').eq(0).children('a').css({color:'#fe3c32'});
	
	//goods商品栏li目录的移入移出事件设置
	$('.goods .goodsc li:gt(0)').mouseover(function(){
		$(this).children('a').css({color:'#fe3c32'});
		$(this).siblings().not('.goodsfirst').children('a').css({color:'black'});
	});
	
	//所有商品分类移入出现菜单的设置
	$('.goods .goodsl').hover(function(){
		$(this).find('.backgrl').css({display:'block'});
	
	},
	function(){
		$(this).find('.backgrl').css({display:'none'});
	});
	
//所有商品分类的商品那一栏ul li的移入移出事件
	$('.goods .goodsl .backgrl .backgoods .myli').mouseover(function(){
		var index = $(this).index();
		$(this).children('a').
		css({background:'black url(img/goods'+(index+1)+'.fw.png) no-repeat top left'});
		$(this).find('.goodslistall').css({display:'block'});
	});
	$('.goods .goodsl .backgrl .backgoods .myli').mouseout(function(){
		var index = $(this).index();
		$(this).children('a').css({background:''});
		$(this).find('.goodslistall').css({display:'none'});
	});
	//所有商品分类的商品那一栏ul li的移入出现商品名称点击变红设置
	$('.goods .goodsl .backgrl .backgoods .myli .goodslistall a').mouseover(function(){
		$(this).css({color:'red'});
	});
	$('.goods .goodsl .backgrl .backgoods .myli .goodslistall a').mouseout(function(){
		$(this).css({color:'black'});
	});
	
	
	//bottom上面最右边的‘米米乐商城’移入移出变色设置
$('.bottom .bottom3 div a').hover(function(){
	$(this).css({color:'red'});
},
function(){
	$(this).css({color:'black'});
});
//footer上面的每一个li移入变色设置
$('.footer ul li a').mouseover(function(){
	$(this).css({color:'red'}).parent().siblings().find('a').css({color:'black'});
});
$('.footer ul li a').mouseout(function(){
	$(this).css({color:'black'});
});
//最下面的联系我们那一栏移入出现下划线移出消失的设置
$('.chengxin ul li').eq(11).find('a').css({color:'red'});
$('.chengxin ul li a').mouseover(function(){
	
	$(this).css({textDecoration:'underline'});
});
$('.chengxin ul li a').mouseout(function(){
	$(this).css({textDecoration:'none'});
});

//返回顶部
$('#chengxinlast').click(function(){
	$('body,html').scrollTop(0);
});
$('#chengxinlast').mouseover(function(){
	
	$(this).css({textDecoration:'underline'});
});
$('#chengxinlast').mouseout(function(){
	$(this).css({textDecoration:'none'});
});
});


