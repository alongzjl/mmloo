$(function(){
	//注册页面的判断设置  **//注册页面的判断设置  **//注册页面的判断设置  **//注册页面的判断设置  **
	//注册页面的判断设置  **//注册页面的判断设置  **//注册页面的判断设置  **//注册页面的判断设置  **
	//注册页面的判断设置  **//注册页面的判断设置  **//注册页面的判断设置  **//注册页面的判断设置  **
	//注册页面的判断设置  **//注册页面的判断设置  **//注册页面的判断设置  **//注册页面的判断设置  **
	
	//账户输入框的效果设置***//账户输入框的效果设置***//账户输入框的效果设置***
	
	//账户输入框的获取和失去焦点的设置
	$('.register .register2 .register21:eq(0) .regis1').focus(function(){
		if($(this).val() == '手机号码'){
			$(this).val('');
		}
		//账户框提示的飞入效果设置
		$('.register .register2 .register21 .userfly').slideDown(5,function(){
			$(this).animate({top:'-35px'},400);
		});
	});
	$('.register .register2 .register21:eq(0) .regis1').blur(function(){
		if($(this).val() == ''){
			$(this).val('手机号码');
		}
		var partten =/^1\d{10}$/;
		if(!partten.test($(this).val())){
				$('.register .reguser').html('账户名格式不对哦');
				$('.register .reguser').css({color:'red'});
			}else{
				var user = getCookie('registernews');
				var userobj =strToObj1(user);
					if( $(this).val() in userobj){
						$('.register .reguser').html('该用户名已被注册');
						$('.register .reguser').css({color:'red'});
					}else{
						$('.register .reguser').html('该用户名可以注册');
						$('.register .reguser').css({color:'green'});
					}
			}
		
		//账户框提示的飞出效果设置
		$('.register .register2 .register21 .userfly').animate({top:'-55px'},200,function(){
			$(this).slideUp(200);
		});
	});
	//改变用户提示框的信息的设置
	$('.register .register2 .register21:eq(0) .regis1').keyup(function(){
		
		if($(this).val() == ""){
			$('.register .reguser').html('用户名不能为空');
			$('.register .reguser').css({color:'red'});
		}
	});
	
	//密码输入框的效果设置***//密码输入框的效果设置***//密码输入框的效果设置***
	
	//密码输入框的获取和失去焦点的设置
	$('.register .register2 .register21:eq(1) .regis1').focus(function(){
		if($(this).val() == '设置密码'){
			$(this).val('');
		}
		//密码框提示的飞入效果设置
		$('.register .register2 .register21 .passwardfly').slideDown(5,function(){
			$(this).animate({top:'-35px'},400);
		});
	});
	$('.register .register2 .register21:eq(1) .regis1').blur(function(){
		if($(this).val() == ''){
			$(this).val('设置密码');
		}
		var partten = /^\w{6,20}$/;
			if(!partten.test($(this).val())){
				$('.register .regpassward').html('密码格式不正确');
				$('.register .regpassward').css({color:'red'});
			}else{
				$('.register .regpassward').html('密码格式正确');
				$('.register .regpassward').css({color:'green'});
			}
			//密码框提示的飞出效果设置
		$('.register .register2 .register21 .passwardfly').animate({top:'-55px'},200,function(){
			$(this).slideUp(200);
		});
	});
	//改变密码提示框的信息的设置
	$('.register .register2 .register21:eq(1) .regis1').keyup(function(){
		
		if($(this).val() == ""){
			$('.register .regpassward').html('密码不能为空');
			$('.register .regpassward').css({color:'red'});
		}
	});
	//图片验证码输入框的效果设置***///图片验证码输入框的效果设置***///图片验证码输入框的效果设置***/
	
	//图片验证码输入框的获取和失去焦点的设置
	$('.register .register2 .register21:eq(2) .regis2').focus(function(){
		if($(this).val() == '验证码'){
			$(this).val('');
		}
		//验证码提示的飞入效果设置
		$('.register .register2 .register21 .imgcheckfly').slideDown(5,function(){
			$(this).animate({top:'-35px'},400);
		});
	});
	$('.register .register2 .register21:eq(2) .regis2').blur(function(){
		if($(this).val() == ''){
			$(this).val('验证码');
		}
		var partten = /^br2s$/i;
			if(!partten.test($(this).val())){
					$('.register .regimgcheck').html('验证码不正确');
					$('.register .regimgcheck').css({color:'red'});
			}else{
				$('.register .regimgcheck').html('验证码正确');
				$('.register .regimgcheck').css({color:'green'});
			}
			//验证码框提示的飞出效果设置
		$('.register .register2 .register21 .imgcheckfly').animate({top:'-55px'},200,function(){
			$(this).slideUp(200);
		});
	});
	//改变图片验证码提示框的信息的设置
	$('.register .register2 .register21:eq(2) .regis2').keyup(function(){
		
		if($(this).val() == ""){
			$('.register .regimgcheck').html('验证码不能为空');
		}
	});
	
	//短信验证码输入框的效果设置***///短信验证码输入框的效果设置***///短信验证码输入框的效果设置***/
	
	//获取短信验证码的边框设置为红色
	$('.register .register2 .register21:eq(3) a').css({border:'1px solid red'});
	//短信验证码输入框的获取和失去焦点的设置
	$('.register .register2 .register21:eq(3) .regis2').focus(function(){
		if($(this).val() == '短信验证码'){
			$(this).val('');
		}
		//短信验证码提示的飞入效果设置
		$('.register .register2 .register21 .newscheckfly').slideDown(5,function(){
			$(this).animate({top:'-35px'},400);
		});
	});
	$('.register .register2 .register21:eq(3) .regis2').blur(function(){
		if($(this).val() == ''){
			$(this).val('短信验证码');
		}
			//短信验证码框提示的飞出效果设置
		$('.register .register2 .register21 .newscheckfly').animate({top:'-55px'},200,function(){
			$(this).slideUp(200);
		});
	});
	//改变短信验证码提示框的信息的设置
	$('.register .register2 .register21:eq(3) .regis2').keyup(function(){
	
		if($(this).val() == ""){
			$('.register .newsregcheck').html('短信验证码不能为空');
		}
	});
	//好友验证码输入框的效果设置***///好友验证码输入框的效果设置***///好友验证码输入框的效果设置***/
	
	//好友推荐码输入框的获取和失去焦点的设置
	$('.register .register2 .register21:eq(4) .regis1').focus(function(){
		if($(this).val() == '好友推荐码（非必填）'){
			$(this).val('');
		}
		//好友推荐码提示的飞入效果设置
		$('.register .register2 .register21 .friendcheckfly').slideDown(5,function(){
			$(this).animate({top:'-35px'},400);
		});
	});
	$('.register .register2 .register21:eq(4) .regis1').blur(function(){
		if($(this).val() == ''){
			$(this).val('好友推荐码（非必填）');
		}
		//好友推荐码框提示的飞出效果设置
		$('.register .register2 .register21 .friendcheckfly').animate({top:'-55px'},200,function(){
			$(this).slideUp(200);
		});
	});
	//改变好友推荐码提示框的信息的设置
	$('.register .register2 .register21:eq(4) .regis1').keyup(function(){
	
		if($(this).val() == ""){
			$('.register .regfrinend').html('好友验证码可有可无的');
		}
	});
	//点击注册按钮产生用户信息的cookie的设置
	$('.register2 .register25 .regis1').click(function(){
		
			//获取当前事件下的商品信息
		var username =  $(this).parent().parent().children('.register21:eq(0)').children('.regis1').val();
		var passwardname = $(this).parent().parent().children('.register21:eq(1)').children('.regis1').val();
		var imgname =  $(this).parent().parent().children('.register21:eq(2)').children('.regis2').val();
		var partten1 = /^1\d{10}$/;
		var partten2 =  /^\w{6,20}$/;
		var partten3 = /^br2s$/i;
		//获取当前cookie并转化为对象进行验证操作
						var str = getCookie('registernews');
						var stro = strToObj1(str);
		if(partten1.test(username) && partten2.test(passwardname) && partten3 .test(imgname)){
			
						//判断商品信息的id是否在cookie中，如果在信息储存到cookie中
						if(username in stro){
							console.log('no');
						}else{
							stro[username] = passwardname;
						}
				str = objToStr1(stro);
				setCookie('registernews',str,354);
				
				location.href = '../submit/submit.html';
		}else{
			var submitdiv = $('<div></div>');
			var submitdiva = $('<a href="javascript:;">返回重新注册</a>');
			var submitdivsmall = $('<div><h1 style="background:green">注册信息输入有误</h1></div>');
			var scrollTop = $(window).scrollTop();
			submitdiv.css({width:'100%',height:'900px',background:'black',opacity:'0.6',zIndex:'9999',
				position:'absolute',left:'0px',top:'0px'});
			submitdivsmall.css({width:'600px',height:'300px',background:'#ddd',color:'black',
			position:'absolute',left:'400px',top:'200px',zIndex:'10000',textAlign:'center',
			paddingTop:'30px'});
			submitdiva.css({display:'block',width:'200px',height:'50px',color:'red',margin:'200px 0 0 400px',fontSize:'30px'});
			submitdiva.appendTo(submitdivsmall);
			submitdivsmall.appendTo('body');
			submitdiv.appendTo('body');
			
			 submitdiva.click(function(){
			 	submitdivsmall.remove();
			 	submitdiva.remove();
			 	submitdiv.remove();
			 });
		}
			
	});
	
$('.register2 .register25 .regis1').hover(function(){
	$(this).css({background:'red'});
},
function(){
	$(this).css({background:'#e02323'});
});
});
