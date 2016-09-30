//判断给定年份是否是闰年
/*
名称： isLeapYear
功能：判断是否是闰年
参数：
    1. 需要判断的时间，类型是时间对象, 也可以数字类型或字符串的年份	
返回值：
    1. true ： 是闰年
	2. false ： 不是闰年
*/
function isLeapYear(year){
	if(typeof year == "object"){
		year = year.getFullYear();
	}else{
		year = Number(year);
	}
	
	if(year%4 == 0 && year%100 != 0 || year%400 == 0){
			return true;
	}
			return false;
	
}

//一个日期的n天后是几号

function whatDate(time,n){
	
	time.setDate(time.getDate()+n)
	
	return time;
}

//以一定形式显示日期

function outputTime(time, options){
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var date = time.getDate();
	
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	var ms = time.getMilliseconds();
	
	if(!options){
		options = {};
	}
	
	if(!options.sepY){
		var sepY = "-"
	}else {
		var sepY = options.sepY;
	}
	if(!options.sepH){
		var sepH = ":";
	}else {
		var sepH = options.sepH;
	}
	
	var str = year + sepY + adjust(month) + sepY + adjust(date) + " "
			+ adjust(h) + sepH + adjust(m) + sepH + adjust(s);
			
	return str;
	
}

//获取所有含有‘name’属性的标签
function getByName(name){
			var allElement = document.getElementsByTagName("*");
			var res = [];
			for(var i = 0;i<allElement.length;i++){
			if(allElement[i].getAttribute("name") == name){
				res.push(allElement[i]);
				}
				
			}
			return res;
		}
		
		
//事件监听函数兼容IE8浏览器
//dom：标签,event:事件例如：click，func：函数
		
function attlisen(dom,event,func){
				if(dom.addEventListener){
					return dom.addEventListener(event,func,false);
				}else{
					return dom.attachEvent("on"+event,func);
				}
			}
			
			
//鼠标左键按住移动函数
			
function movediv(dom){
				dom.onmousedown = function(e){
					var evn = e || window.event;
					var l = evn.offsetX;
					var t = evn.offsetY;
				
					document.onmousemove = function(e){
						var e1 = e || window.event;
						var Left = e1.clientX;
						var Top = e1.clientY;
						//有滚动条时的滚动距离的兼容性处理
						var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
						var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
						//确定div的位置
						var toLeft = Left - l ;
						var toTop = Top - t;
						//最大允许的宽和高
						var maxLeft = window.innerWidth + scrollLeft - dom.offsetWidth;
						var maxTop = window.innerHeight + scrollTop - dom.offsetHeight;
						//判断不让其出界
						if(toLeft<0){
							toLeft = 0;
						} else if(toLeft>maxLeft){
							toLeft = maxLeft;
						}
						if(toTop<0){
							toTop = 0;
						} else if(toTop>maxTop){
							toTop = maxTop;
						}
						dom.style.left = toLeft+'px';
						dom.style.top =toTop +'px';
					}
				}
					document.onmouseup = function(){
						//取消事件给事件赋值为null即可
						document.onmousemove = null;
						}
				
				//解决谷歌拖拽bug
				return false;
			}
			
	//创建一个新的cookie
function setCookie(name, value, expiredays){
					// name, value是一个字符串
					// 过期时间给一个天数（数字类型），比如7，表示7天后过期
					
					var exp = new Date(); // 获取当前时间对象
					// 将时间调整为expiredays天后的时间
					exp.setDate(exp.getDate() + expiredays);
					// 获取时间对象的GMT格式字符串
					var gmtStr = exp.toGMTString(); 					
					// 生成字符串，并设置到document.cookie上面
					// 对value值进行编码，以支持中文，空格等cookie允许的字符
					document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + gmtStr +";path="+"/";
				}
				
	//在创建的cookie的基础上把失效时间改为之前时间即负值就可以相应的删除cookie
function removeCookie(name){
					setCookie(name, "", -1);
				}


				
	//封装一个可以查找cookie中键的值的函数			
function getCookie(name){
				var res = document.cookie;
				var res1 = res.split('; ');
				for(var i = 0;i<res1.length;i++){
					if(res1[i].indexOf(name) != -1){
						var res2 = res1[i];
						var res3 = res2.split('=');
						return decodeURIComponent(res3[1]);
					}
				}
				return '';
		}

	//字符串转化为对象函数
function strToObj(str){
				if(!str){
					return {};
				}
				var res = {};
				var str1 = str.split(':');
				for(var i = 0;i<str1.length;i++){
					var data = str1[i].split(',');
					res[data[0]] = {
						name:data[1],
						price:parseFloat(data[2]),
						num:parseFloat(data[3]),
						img:data[4]
					};
				}
				return res;
			}
function strToObj1(str){
				if(!str){
					return {};
				}
				var res = {};
				var str1 = str.split(':');
				for(var i = 0;i<str1.length;i++){
					var data = str1[i].split(',');
					res[data[0]] = data[1];
				}
				return res;
			}
//对象转化为字符转函数
			function objToStr(obj){
				
				var res = '';
				for(var key in obj){
					if(res){
						res += ':';
					}
					var good = obj[key];
					res += key + ',' + good.name + ',' +good.price + ',' + good.num + ',' + good.img;
				}
				return res;
			}
			
				function objToStr1(obj){
				
				var res = '';
				for(var key in obj){
					if(res){
						res += ':';
					}
					var good = obj[key];
					res += key + ',' + good;
				}
				return res;
			}
