window.onload = function(){
//header获取商品信息的设置*******	//header获取商品信息的设置*******	//header获取商品信息的设置*******	
//获取商品信息也就是获取shoppingcar的cooike信息来显示
	var tbo = document.getElementById('head_lead12')
	var headshopnum1 = document.getElementById('headshopnum1')
	var headshopnum2 = document.getElementById('headshopnum2')
	var headshopprice = document.getElementById('headshopprice')
	//每次点击事件先清空tbo中的内容		
		tbo.innerHTML = "";
	var shopnumcount = 0;
	var shoppriceall = 0;
	var str1 = getCookie('shoppingcar');
	
			//如果cookie中有值，就把里面的信息显示在tbo中
			if(str1){
				var stro = strToObj(str1);
					//遍历对象stro把相应id的信息显示出来
				for(var key in stro){
					var good = stro[key];
				
					shopnumcount +=1;
					//创建tr、td用于储存信息
					var alldiv = document.createElement('div');
					var div2 = document.createElement('div');
					var div3 = document.createElement('div');
					alldiv.id = key;
					alldiv.style.height = 66 + 'px';
					var but3 = document.createElement('button');
					but3.innerHTML = '移出';
					var newimg = document.createElement('img');
					//修改按钮but3的样式
					newimg.src = good.img;
					newimg.style.float = 'left';
					div2.style.float = 'right';
					div2.style.width = 230 +'px';
					div2.style.height = 45 + 'px';
					div3.style.float = 'right';
					div3.style.color = 'red';
					newimg.style.width = 50 + 'px';
					newimg.style.height = 66 + 'px';
					var newres1 = document.createTextNode(good.name);
					var newres2 = document.createTextNode( '￥' + good.price + '*' +good.num +'  ');
					//把标签插入到相应的父标签中
					div2.appendChild(newres1);
					div3.appendChild(newres2);
					div3.appendChild(but3);
					alldiv.appendChild(newimg);
					alldiv.appendChild(div2);
					alldiv.appendChild(div3);
					shoppriceall += (good.price * good.num);
					//对此按钮进行onclick操作，进行对应tr的删除操作，
					alldiv.children[2].children[0].onclick = function(){
						var goodid = this.parentNode.parentNode.id;
						var str = getCookie('shoppingcar');
						var stro = strToObj(str);
						delete stro[goodid];
						var str2 = objToStr(stro);
						setCookie('shoppingcar',str2,354);
						tbo.removeChild(this.parentNode.parentNode);
					}
					tbo.appendChild(alldiv);
				}
				headshopnum1.innerHTML = shopnumcount;
				headshopnum2.innerHTML = shopnumcount;
				headshopprice.innerHTML = shoppriceall;
			}else{
				tbo.innerHTML = '您还没有添加商品到购物车！赶快去挑选商品把。';
			}

			
}	