$(function(){
	//*********shopping购物指南网页中的设置*******//shopping购物指南网页中的设置*************
	//*********shopping购物指南网页中的设置*******//shopping购物指南网页中的设置*************
	//*********shopping购物指南网页中的设置*******//shopping购物指南网页中的设置*************
	
	//左边第一个表格的移入字体变大，背景变色的设置
	$('.shoploadleft1 ul li a').hover(function(){
		$(this).css({fontSize:'14px;',background:'red',color:'white',fontWeight:'bolder'});
	},
	function(){
		$(this).css({fontSize:'12px;',background:'white',color:'black',fontWeight:'normal'});
	});
//左边第2个表格的移入字体变色，出现下划线的设置
	$('.shoploadleft2 ul li a').hover(function(){
		$(this).css({color:'red',textDecoration:'underline'});
	},
	function(){
		$(this).css({color:'#00549d',textDecoration:'none'});
	});
	//购物指南里面移入a上出现下划线的设置
	$('.shoploadright ul li a').hover(function(){
		$(this).css({textDecoration:'underline'});
	},
	function(){
		$(this).css({textDecoration:'none'});
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
		$(this).find('.goodslist').css({display:'block'});
	});
	$('.goods .goodsl .backgrl .backgoods .myli').mouseout(function(){
		var index = $(this).index();
		$(this).children('a').css({background:''});
		$(this).find('.goodslist').css({display:'none'});
	});
	//所有商品分类的商品那一栏ul li的移入出现商品名称点击变红设置
	$('.goods .goodsl .backgrl .backgoods .myli .goodslist a').mouseover(function(){
		$(this).css({color:'red'});
	});
	$('.goods .goodsl .backgrl .backgoods .myli .goodslist a').mouseout(function(){
		$(this).css({color:'black'});
	});
	
	//购物指南页面的首页移入效果设置
	$('.shopload .shopload1 p a').hover(function(){
		$(this).css({textDecoration:'underline',color:'red'});
	},
	function(){
		$(this).css({textDecoration:'none',color:'black'});
	});
	$('.shoploadlist .shopload1 p a').hover(function(){
		$(this).css({textDecoration:'underline',color:'red'});
	},
	function(){
		$(this).css({textDecoration:'none',color:'black'});
	});
});
