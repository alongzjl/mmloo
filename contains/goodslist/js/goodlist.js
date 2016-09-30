$(function(){
	//商品列表的设置*******	//商品列表的设置*******	//商品列表的设置*******	//商品列表的设置*******	
//商品列表的设置*******	//商品列表的设置*******	//商品列表的设置*******	//商品列表的设置*******	
//商品列表的设置*******	//商品列表的设置*******	//商品列表的设置*******	//商品列表的设置*******	

//品牌的a链接移入移出变化的设置
$('.shoploadlist .goodslist .goodslistright .listright1 h2 a').hover(function(){
	$(this).css({color:'white',textDecoration:'underline',background:'#0080ff'});
},
function(){
	$(this).css({color:'#575ab4',textDecoration:'none',background:'white'});
});
//商品列表的每一个li移入变化效果的设置
var zIndex = 1;
$('.shoploadlist .goodslist .goodslistright .listright3 ul li').hover(function(){
	zIndex +=1;
	$(this).css({border:'1px solid #d93600',width:'224px',height:'430px',zIndex:zIndex});
	$(this).stop().animate({borderWidth:'3px'},100);
	$(this).find('.listbottom').stop().animate({top:'180px'},500);
},
function(){
			
			$(this).css({height:'335px'});
			$(this).stop().animate({borderWidth:'1px'},100,function(){
			$(this).css({border:'1px solid #f0f0f0',width:'230px'});
		});
			$(this).find('.listbottom').stop().animate({top:'220px'},500);
});
//商品列表中每一个li里面的大图，当移入小图时会切换到相应的大图上面的效果的设置
$('.listbottom .listsmallimg div a').hover(function(){
	$(this).parent().css({border:'1px solid #d93600'}).siblings().css({border:'1px solid #f0f0f0'});
	var index = $(this).parent().index();
	var index2 = $(this).parent().parent().parent().parent().index();
	//标准的每个li都可以转换图片，但是目前只有三个li的图片的资源，就先用一样的把
	if(index2 <=2){
		$(this).parent().parent().parent().prev().find('img').attr('src','img/goodsright' +(1+index2) +'_' + (1+index) + '.jpg') ;
	}else if(index2 > 2){
		$(this).parent().parent().parent().prev().find('img').attr('src','img/goodsright1_' + (1+index) + '.jpg') ;
	}
},
function(){
	
});
//商品中每一个li中商品介绍那一栏移入字体变色效果设置
$('.listbottom .listbottom1 p a').hover(function(){
	$(this).css({color:' #d93600'});
},
function(){
	$(this).css({color:' #00549d'});
});
//商品中每一个li中商品的店址那一栏效果设置
$('.listbottom .listbottom4 a').hover(function(){
	$(this).css({color:' #d93600',textDecoration:'underline'});
},
function(){
	$(this).css({color:' #00549d',textDecoration:'none'});
});
//商品中每一个li中加入购物车那一栏效果设置
$('.listbottom .listbottom5 a').hover(function(){
	$(this).css({color:' white'});
},
function(){
	$(this).css({color:' #999'});
});
//商品中每一个li中点击加入购物车飞入的效果设置
$('.listbottom .listbottom5 a').click(function(e){
	//当点击加入购物车时的效果设置
	var flydiv = $('<div></div>');
	flydiv.css({width:'230px',height:'430px',border:'3px solid #d93600',zIndex:zIndex+2});
	flydiv.appendTo($(this).parent().parent().parent());
	var index = $(this).parent().parent().parent().index();
	var st = $(window).scrollTop();
	var sl =  $(window).scrollLeft();
	
	flydiv.fly({
						start : {
							left : $(this).parent().parent().parent().offset().left - sl,
							top : $(this).parent().parent().parent().offset().top - st
							//Math.floor(index/4)*400
							//$('body,html').scrollTop()
						}, 
						end : {
							left : $('.small').offset().left,
							top : $('.small').offset().top - 430,
							width : 0,
							height : 0
						},
						speed : 1,
						onEnd : function (){
							flydiv.remove();
						}
						
					});
	//当点击加入购物车时创建cookie保存商品信息的设置
	
	//获取当前事件下的商品信息
		var goodid =  $(this).parent().parent().parent().prop('id');
		var goodimg = $(this).parent().parent().prev().find('img').attr('src');
		var goodname =  $(this).parent().parent().children('.listbottom1').find('a').text();
		var goodprice = $(this).parent().parent().children('.listbottom2').children('p').find('em').text();
		goodprice = parseFloat(goodprice);
					//获取当前cookie并转化为对象进行验证操作
						var str = getCookie('shoppingcar');
						var stro = strToObj(str);
						//判断商品信息的id是否在cookie中，如果在就只进行num+1操作否则就把此id的商品信息储存到cookie中
						if(goodid in stro){
							stro[goodid].num += 1;
						}else{
							stro[goodid] = {
								name:goodname,
								price:goodprice,
								num:1,
								img:goodimg
							};
						}
				str = objToStr(stro);
				setCookie('shoppingcar',str,354);
			
			
});

///*中间商品列表中右边的选项左边排列方式的样式设置              */
$('.listright2 .listright2l ul li:gt(0)').find('a').hover(function(){
	$(this).css({color:' #d93600',background:'white',height:'37px'});
},
function(){
	$(this).css({color:'black',background:'#f7f7f7',height:'36px'});
});
$('.listright2 .listright2l ul li').eq(0).find('a').css({color:' #d93600',background:'white',height:'37px'});



});
