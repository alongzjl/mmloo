$(function(){
	
	//登录页面的判断设置    //登录页面的判断设置   //登录页面的判断设置      //登录页面的判断设置 
	//登录页面的判断设置   //登录页面的判断设置   //登录页面的判断设置       //登录页面的判断设置 
	
	$('.submitgo .subright .inp1:eq(0)').css({marginTop:'10px'});
	$('.submitgo .subright .inp1:eq(1)').css({marginTop:'10px'});
	//用户名 登录密码 输入框里面字体大小的设置
	$('.submitgo .subright .inp1 dd input').css({fontSize:'16px'});
	
	// 登录密码 输入框字体大小及颜色的设置
	$('.submitgo .subright .passwarddanger').css({fontSize:'12px',color:'red'});
	$('.submitgo .subright .userdanger').css({fontSize:'12px',color:'red'});
	// 登录密码 输入框不能为空的提示的设置
	if($('.submitgo .subright .inp1:eq(1) dd input').val() == ""){
		$('.submitgo .subright .passwarddanger').html('密码不能为空');
	}
	//用户名 登录密码 输入框获取焦点的设置
	$('.submitgo .subright .inp1:eq(0) dd input').focus(function(){
		if($(this).val() == '手机号/会员名/邮箱'){
			$(this).val("");
		}
		//获取焦点时边框变色
		$(this).css({borderRight:'1px solid #f08300',borderTop:'1px solid #f08300',borderBottom:'1px solid #f08300',});
		$(this).parent().prev().css({borderLeft:'1px solid #f08300',borderTop:'1px solid #f08300',borderBottom:'1px solid #f08300',});
		
	});
	$('.submitgo .subright .inp1:eq(1) dd input').focus(function(){
		
		//获取焦点时边框变色
		$(this).css({borderRight:'1px solid #f08300',borderTop:'1px solid #f08300',borderBottom:'1px solid #f08300',});
		$(this).parent().prev().css({borderLeft:'1px solid #f08300',borderTop:'1px solid #f08300',borderBottom:'1px solid #f08300',});
	});
	//用户名 登录密码 输入框失去焦点的设置
	$('.submitgo .subright .inp1:eq(0) dd input').blur(function(){
		var partten =/^1\d{10}$/;
				if(!partten.test($(this).val())){
						$('.submitgo .subright .userdanger').html('账户名格式不对哦');
							$('.submitgo .subright .userdanger').css({color:'red'});
			}else{
				//获取本地用户信息cookie
			var user = getCookie('registernews');
			var userobj =strToObj1(user);
				if( $(this).val() in userobj){
				$('.submitgo .subright .userdanger').html('用户正确，请继续输入密码登录');
				$('.submitgo .subright .userdanger').css({color:'green'});
				}else{
					
					$('.submitgo .subright .userdanger').html('您还没有注册呢，请先注册');
					$('.submitgo .subright .userdanger').css({color:'red'});
				}
			}
		
		if($(this).val() == ''){
			$(this).val("手机号/会员名/邮箱");
		}
		
		$(this).css({borderRight:'1px solid #e6e6e6',borderTop:'1px solid #e6e6e6',borderBottom:'1px solid #e6e6e6',});
		$(this).parent().prev().css({borderLeft:'1px solid #e6e6e6',borderTop:'1px solid #e6e6e6',borderBottom:'1px solid #e6e6e6',});
		
	});
	$('.submitgo .subright .inp1:eq(1) dd input').blur(function(){
			var partten = /^\w{6,20}$/;
				if(!partten.test($(this).val())){
					$('.submitgo .subright .passwarddanger').html('密码格式不正确');
					$('.submitgo .subright .passwarddanger').css({color:'red'});
				}else{
					//获取本地用户信息的密码cookie
				var user = getCookie('registernews');
				var userobj =strToObj1(user);
				var username = $(this).parent().parent().parent().children('.inp1:eq(0)').find('input').val();
					if( username in userobj && userobj[username] == $(this).val()){
						$('.submitgo .subright .passwarddanger').html('密码正确');
						$('.submitgo .subright .passwarddanger').css({color:'green'});
					}else{
						$('.submitgo .subright .passwarddanger').html('密码不正确');
						$('.submitgo .subright .passwarddanger').css({color:'red'});
					}
				}
			$(this).css({borderRight:'1px solid #e6e6e6',borderTop:'1px solid #e6e6e6',borderBottom:'1px solid #e6e6e6',});
		$(this).parent().prev().css({borderLeft:'1px solid #e6e6e6',borderTop:'1px solid #e6e6e6',borderBottom:'1px solid #e6e6e6',});
		
	});
	//登录密码 输入框输入内容时提示的变化的设置
	$('.submitgo .subright .inp1:eq(1) dd input').keyup(function(){
		
		if($(this).val() == ""){
			$('.submitgo .subright .passwarddanger').html('密码不能为空');
			$('.submitgo .subright .passwarddanger').css({color:'red'});
		}
	});
	//账户 输入框输入内容时提示的变化的设置
	$('.submitgo .subright .inp1:eq(0) dd input').keyup(function(){
		
		if($(this).val() == ""){
			$('.submitgo .subright .userdanger').html('用户名不能为空');
				$('.submitgo .subright .userdanger').css({color:'red'});
		}
	});
	//点击登录时登录到首页的效果的设置
	$('.submitgo .subright .subload .inp2').click(function(){
				//获取当前事件下的商品信息
		var username =  $(this).parent().parent().children('.inp1:eq(0)').find('input').val();
		
			removeCookie('submitnews');
		//获取当前cookie并转化为对象进行验证操作
						var str = getCookie('submitnews');
						var stro = strToObj1(str);
				var partten = /^\d{11}$/;		
		if(partten.test(username)){
			
						//判断商品信息的id是否在cookie中，如果在信息储存到cookie中
						
							stro['name'] = username;
					
				str = objToStr1(stro);
				setCookie('submitnews',str,354);
			location.href = '../../userindex.html';
		}else{
			var submitdiv = $('<div></div>');
			var submitdiva = $('<a href="javascript:;">返回重新登录</a>');
			var submitdivsmall = $('<div><h1 style="background:green">登录信息输入有误</h1></div>');
			submitdiv.css({width:'100%',height:'100%',background:'black',opacity:'0.6',zIndex:'9999',
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
});