$(function(){
	//商品详情页惠普电脑   的设置*******	///商品详情页惠普电脑   的设置*******	///商品详情页惠普电脑   的设置*******	/
//商品详情页惠普电脑   的设置*******	///商品详情页惠普电脑   的设置*******	///商品详情页惠普电脑   的设置*******	/
//商品详情页惠普电脑   的设置*******	///商品详情页惠普电脑   的设置*******	///商品详情页惠普电脑   的设置*******	/
//点击大图片放大的效果的设置
	var newdivbig;
	$('.huipuintro .huipuintrol .huipuintrobig').click(function(){
		if($(this).parent().parent().width() == 380){
			$(this).parent().parent().animate({height:'500px',width:'1200px'},300);
			$(this).parent().animate({width:'1200px',height:'410px'},300);
			$(this).animate({width:'410px',height:'410px',left:'395px'},300);
			
			$(this).parent().parent().css({zIndex:'10'});
			newdivbig = $('<a href="javascript:;">×</a>');
			newdivbig.css({height:'30px',width:'50px',display:'block',position:'absolute',left:'1150px',
			top:'0px',fontWeight:'bloder',fontSize:'30px'});
			newdivbig.appendTo($(this).parent().parent());
			
		}else if($(this).parent().parent().width() == 1200){
				//$(this).css({display:'none'});
				$(this).animate({width:'1000px',height:'1000px',left:'100px'},300);
					$(this).mousedown(function(e){
						var t = e.offsetY;
						$('body').mousemove(function(e){
						var toTop = e.clientY - t -105;
						if(toTop >=0){
							toTop = 0;
						}else if(toTop <=-590){
							toTop = -590;
						}
						$('.huipuintro .huipuintrol .huipuintrobig').css({top:toTop + 'px'});
						
					});
					$('body').mouseup(function(){
						$('body').unbind('mousemove');
						$(this).unbind('mousedown');
					});
					return false;
				});
				
				
	}
		//点击大图右上角的×号大图就会变小的设置
	newdivbig.click(function(){
		$(this).remove();
		$('.huipuintro .huipuintrol').css({background:'white'}).animate({height:'450px',width:'380px'},400);
		$('.huipuintro .huipuintrol .imgbigdiv').animate({width:'360px',height:'360px'},400);
		$('.huipuintro .huipuintrol .huipuintrobig').animate({width:'360px',height:'360px',
		left:'0px',top:'0px'},400);
	});
	
});

//点击左边小图片大图片跟着变化的效果的设置
var indexhuipuintro = 0;
$('.huipuintro .huipuintrol ul li').mouseenter(function(){
	 indexhuipuintro = $(this).index();
	$(this).css({border:'1px solid #d93600'}).siblings().css({border:'1px solid  #eee'});
	$(this).parent().prev().find('img').attr('src','img/huipu'+(1+ indexhuipuintro)+'.jpg')
	
});
//点击左边小图片大图片的向左向右按钮跟着变化的效果的设置
$('.huipuintro .huipuintrol').mouseenter(function(){
	
	$('.huipuintrol .bigleft').css({display:'block'});
	$('.huipuintrol .bigright').css({display:'block'});
})
$('.huipuintro .huipuintrol').mouseleave(function(){
	$('.huipuintrol .bigright').css({display:'none'});
	$('.huipuintrol .bigleft').css({display:'none'});
});
//点击向左转动按钮的效果设置

$('.huipuintrol .bigleft').click(function(){
	if(indexhuipuintro == 0){
		indexhuipuintro = 5;
		}
	indexhuipuintro -=1;
	
	$('.huipuintro .huipuintrol ul li').eq(indexhuipuintro).css({border:'1px solid #d93600'}).
	siblings().css({border:'1px solid  #eee'});
	$(this).parent().find('.huipuintrobig').attr('src','img/huipu'+(indexhuipuintro+1)+'.jpg')
});

//点击向右转动按钮的效果设置
$('.huipuintrol .bigright').click(function(){
	if(indexhuipuintro == 4){
		indexhuipuintro = -1;
		}
	indexhuipuintro +=1;
	
	$('.huipuintro .huipuintrol ul li').eq(indexhuipuintro).css({border:'1px solid #d93600'}).
	siblings().css({border:'1px solid  #eee'});
	$(this).parent().find('.huipuintrobig').attr('src','img/huipu'+(indexhuipuintro+1)+'.jpg')
});

//点击全国出现全国的地址的效果设置
$('#huipucountry span').hover(function(){
	$(this).css({color:'red',textDecoration:"underline"});
	$('#allcountry').css({display:'block'});
},
function(){
	$(this).css({color:'#00549d',textDecoration:"none"});
	
});
$('#allcountry').mouseleave(function(){
	$(this).css({display:'none'});
});
$('#allcountry li a').hover(function(){
	$(this).css({background:'#ffa200',color:'white'});
},
function(){
	$(this).css({background:'white',color:'black'});
});
//点击-号商品数量减一的设置
$('.huipuintrorbl .huipubuy .huipuall').children('a:eq(1)').click(function(){
	var huipuall = $(this).parent().prev().val();
	huipuall -=1;
	if(huipuall <= 1){
		huipuall =1;
	}
	$(this).parent().prev().val(huipuall);
});
//点击+号商品数量加1的设置
$('.huipuintrorbl .huipubuy .huipuall').children('a:eq(0)').click(function(){
	var huipuall = $(this).parent().prev().val();
	huipuall = parseInt(huipuall);
	huipuall +=1;
	$(this).parent().prev().val(huipuall);
});

//点击向左缩放按钮左边部分会消失，右边的变大
$('.fixedleft1').click(function(){
	
	$('.huipubig .huipubigl').css({display:'none'});
	$('.huipubig .huipubigr').css({width:'1200px'});
	$('.fixedleft1').css({display:'none'});
	$('.fixedleft2').css({display:'block'});
	
});
//点击恢复原样
$('.fixedleft2').click(function(){
	
	$('.huipubig .huipubigl').css({display:'block'});
	$('.huipubig .huipubigr').css({width:'977px'});
	$('.fixedleft2').css({display:'none'});
	$('.fixedleft1').css({display:'block'});
});


//当页面滚动到1004的高度 时做相应的效果的设置

$(window).scroll(function(){
	var pos = $(this).scrollTop();
	
	 if(pos>=1004){
		$('.huipubigr .huipubigr1').css({position:'fixed',top:'0px'});
		console.log($('.huipubig .huipubigr').width());
		if($('.huipubig .huipubigr').width() == 977){
			$('.fixedleft1').css({display:'block'});
		}else{
			$('.fixedleft2').css({display:'block'});
		}
		
	}else if(pos<1004){
		$('.huipubigr .huipubigr1').css({position:'relative'});
		$('.fixedleft1').css({display:'none'});
		$('.fixedleft2').css({display:'none'});
	}
});

$('.huipuintrorb .huipuintrorbl .huipujoin').find('.huipujoin2').click(function(){
	//获取当前事件下的商品信息
		var goodidcar = $('#g2').prop('id');
		var goodnamecar =  $('#g2').children('h3').text();
		var goodimgcar = $('#imgbigdiv').attr('src');
		var goodpricecar =  $('#huipuspan2').find('em').text();
		var goodnumcar = $(this).parent().prev().find('input').val();
		goodpricecar = parseFloat(goodpricecar);
		
					//获取当前cookie并转化为对象进行验证操作
						var strcar = getCookie('shoppingcar');
						var strocar = strToObj(strcar);
						//判断商品信息的id是否在cookie中，如果在就只进行num+1操作否则就把此id的商品信息储存到cookie中
						if(goodidcar in strocar){
							strocar[goodidcar].num = goodnumcar;
						}else{
							strocar[goodidcar] = {
								name:goodnamecar,
								price:goodpricecar,
								num:goodnumcar,
								img:goodimgcar
							};
						}
					//	console.log(strocar);
				strcar = objToStr(strocar);
				console.log(strcar);
				setCookie('shoppingcar',strcar,354);
			
});

});
