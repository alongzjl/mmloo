$(function(){
	//商品购物车的设置*******	///商品购物车的设置*******	///商品购物车的设置*******	/
//商品购物车的设置*******	///商品购物车的设置*******	///商品购物车的设置*******	/
//商品购物车的设置*******	///商品购物车的设置*******	///商品购物车的设置*******	/
//商品购物车的设置*******	///商品购物车的设置*******	///商品购物车的设置*******	/

//购物车中商品名称那个td的长度的设置
$('.shopcargoods .tab tr th').eq(0).css({width:'400px',height:'35px'}).siblings().css({width:'150px',height:'35px'});
$('.shopcargoods .tab tr').find('td:eq(0)').css({width:'400px'}).siblings().css({width:'150px'});

//最下面的商品展示区商品名称点入变色的设置
$('.goodslistshow ul li p a').hover(function(){
	$(this).css({color:'#d93600'});
},
function(){
	$(this).css({color:'#00549d'});
});
//最下面的商品展示区最后一个li的边框取消的设置
$('.goodslistshow ul li').eq(4).css({border:'none'});;
//最下面的商品展示区商品加入购物车效果的设置
$('.goodslistshow ul li .showshoplast').hover(function(){
	$(this).css({background:'red url(img/gouwuchelogo1.fw.png) no-repeat 18px 2px'});
},
function(){
	$(this).css({background:'#d93600 url(img/gouwuchelogo.png) no-repeat 18px 2px'});
});
//购物车下面--下一步，核对购物信息的效果设置
$('.nextstep a').hover(function(){
	$(this).css({background:'#0059b2 url(img/gouwuche12.fw.png) no-repeat center left'});
},
function(){
	$(this).css({background:'#49afcd url(img/gouwuche1.png) no-repeat center left'});
});
//最下面的商品加入购物车之前要放到本地cookie中的设置
$('.goodslistshow ul li').find('.showshoplast').click(function(){
	//获取当前事件下的商品信息
		var goodidcar =  $(this).parent().prop('id');
		var goodimg = $(this).parent().children('.showimgshop').find('img').attr('src');
		var goodnamecar =  $(this).parent().children('p').find('a').text();
		var goodpricecar = $(this).parent().children('h2').find('span').text();
		goodpricecar = parseFloat(goodpricecar);
					//获取当前cookie并转化为对象进行验证操作
						var strcar = getCookie('shoppingcar');
						var strocar = strToObj(strcar);
						//判断商品信息的id是否在cookie中，如果在就只进行num+1操作否则就把此id的商品信息储存到cookie中
						if(goodidcar in strocar){
							strocar[goodidcar].num += 1;
						}else{
							strocar[goodidcar] = {
								name:goodnamecar,
								price:goodpricecar,
								num:1,
								img:goodimg,
							};
						}
				strcar = objToStr(strocar);
				setCookie('shoppingcar',strcar,354);
				window.location.reload()//网页的自刷新
});
//购物车商品总价的计算的设置
$('.shopcargoods .tab tbody tr').find('td:eq(3)').each(function(){
	
});
});
