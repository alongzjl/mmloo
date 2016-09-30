window.onload = function(){
//商品购物车的设置*******	///商品购物车的设置*******	///商品购物车的设置*******	/
//商品购物车的设置*******	///商品购物车的设置*******	///商品购物车的设置*******	/
//获取商品信息也就是获取shoppingcar的cooike信息来显示
	var tbo = document.getElementById('shoptbo')
	var pricelastall = document.getElementById('pricelast')
	var trall = shoptbo.getElementsByTagName('tr');
		//每次点击事件先清空tbo中的内容		
		tbo.innerHTML = "";
	
	var str1 = getCookie('shoppingcar');
	
			//如果cookie中有值，就把里面的信息显示在tbo中
			if(str1){
				var stro = strToObj(str1);
					//遍历对象stro把相应id的信息显示出来
				for(var key in stro){
					var good = stro[key];
					
					//创建tr、td用于储存信息
					var alltr = document.createElement('tr');
					alltr.style.background = '#fffdee';
					
					alltr.id = key;
					
					var td1 = document.createElement('td');	
					var td2 = document.createElement('td');	
					var td3 = document.createElement('td');	
					var td4 = document.createElement('td');	
					var td5 = document.createElement('td');	
					var but1 = document.createElement('button');
					//修改按钮but1的样式
					but1.style.width = 20 + 'px';
					but1.style.height = 30 + 'px';
					but1.style.background = '#f1f1f1';
					but1.innerHTML = '-';
					var but2 = document.createElement('button');
					//修改按钮but2的样式
					but2.style.width = 20 + 'px';
					but2.style.height = 30 + 'px';
					but2.style.background = '#f1f1f1';
					but2.innerHTML = '+';
					var but3 = document.createElement('button');
					var but4 = document.createElement('button');
					//修改按钮but3的样式
					
					but3.style.width = 50 + 'px';
					but3.style.height = 30 + 'px';
					
					but3.innerHTML = '移除';
					but4.style.width = 50 + 'px';
					but4.style.height = 30 + 'px';
					
					but4.innerHTML = '收藏';
					but3.style.background = '#fffdee';
					but4.style.background = '#fffdee';
					//修改按钮inp1的样式
					var inp1 = document.createElement('input');
					inp1.style.width = 50 + 'px';
					td1.innerHTML = good.name;
					//把标签插入到相应的父标签中
					td3.appendChild(but1);
					td3.appendChild(inp1);
					
					//给inp1中赋值，使其随着cookie中的num变化而变化
					inp1.value += good.num;
					
					td3.appendChild(but2);
					
					td5.appendChild(but3);
					td5.appendChild(but4);
					alltr.appendChild(td1);
					alltr.appendChild(td2);
					alltr.appendChild(td3);
					alltr.appendChild(td4);
					alltr.appendChild(td5);
						var pricelast = 0;
					//对inp1输入框进行onkeyup事件操作，用于获取输入值变化时当前的值
					alltr.children[2].children[1].onkeyup = function(){
						var num2 = this.value;
						//把值赋给cookie中的num，使其随着变化,要是当前ip下的对应着的数量,要是对应商品的num
						stro[this.parentNode.parentNode.id].num = num2;
						
						//使商品价格也随着发生变化
						this.parentNode.parentNode.children[3].innerHTML = '￥' + stro[this.parentNode.parentNode.id].price * stro[this.parentNode.parentNode.id].num;
						//总价的变化
							var respriceall = 0;
							for(var j = 0; j<trall.length;j++){
								var resprice = trall[j].children[3].innerHTML.replace('￥','');
								resprice = parseInt(resprice);
								respriceall +=resprice;
							}
						pricelastall.innerHTML = respriceall;
						var str2 = objToStr(stro);
						//保存coookie
						setCookie('shoppingcar',str2,354);
					
					}
					//对此按钮进行onclick操作，进行inp1内容的减一操作，
					alltr.children[2].children[0].onclick = function(){
						this.parentNode.children[1].value -=1;
						if(this.parentNode.children[1].value <=1){
							this.parentNode.children[1].value =1;
						}
					//把值赋给cookie中的num，使其随着变化,要是当前ip下的对应着的数量,要是对应商品的num
						stro[this.parentNode.parentNode.id].num = this.parentNode.children[1].value;
					
					this.parentNode.parentNode.children[3].innerHTML =  '￥' +stro[this.parentNode.parentNode.id].price * stro[this.parentNode.parentNode.id].num;
					//总价的变化
					var respriceall = 0;
					for(var j = 0; j<trall.length;j++){
						var resprice = trall[j].children[3].innerHTML.replace('￥','');
						resprice = parseInt(resprice);
						respriceall +=resprice;
					}
					pricelastall.innerHTML = respriceall;
						var str2 = objToStr(stro);
						setCookie('shoppingcar',str2,354);
						
					}
					//对此按钮进行onclick操作，进行inp1内容的减一操作，
					alltr.children[2].children[2].onclick = function(){
						var num3 = this.parentNode.children[1].value
						var num4 = parseInt(num3) +1;
						this.parentNode.children[1].value = num4;
						//把值赋给cookie中的num，使其随着变化,要是当前ip下的对应着的数量,要是对应商品的num
						stro[this.parentNode.parentNode.id].num = this.parentNode.children[1].value;
						
						this.parentNode.parentNode.children[3].innerHTML =  '￥' +stro[this.parentNode.parentNode.id].price * stro[this.parentNode.parentNode.id].num;
						//总价的变化
					var respriceall = 0;
					for(var j = 0; j<trall.length;j++){
						var resprice = trall[j].children[3].innerHTML.replace('￥','');
						resprice = parseInt(resprice);
						respriceall +=resprice;
					}
					pricelastall.innerHTML = respriceall;
						var str2 = objToStr(stro);
						setCookie('shoppingcar',str2,354);
						
					}
					td2.innerHTML = '￥' + good.price;
					td4.innerHTML = '￥' + good.price * good.num;
					//对此按钮进行onclick操作，进行对应tr的删除操作，
					alltr.children[4].children[0].onclick = function(){
						var goodid = this.parentNode.parentNode.id;
						var str = getCookie('shoppingcar');
						var stro = strToObj(str);
						delete stro[goodid];
						var str2 = objToStr(stro);
						setCookie('shoppingcar',str2,354);
						tbo.removeChild(this.parentNode.parentNode);
						var respriceall = 0;
					for(var j = 0; j<trall.length;j++){
						var resprice = trall[j].children[3].innerHTML.replace('￥','');
						resprice = parseInt(resprice);
						respriceall +=resprice;
					}
				pricelastall.innerHTML = respriceall;
					}
					tbo.appendChild(alltr);
				}
			
			}else{
				tbo.innerHTML = '购物车为空';
			}
			//总价的计算的设置
			var respriceall = 0;
					for(var j = 0; j<trall.length;j++){
						var resprice = trall[j].children[3].innerHTML.replace('￥','');
						resprice = parseInt(resprice);
						respriceall +=resprice;
					}
				pricelastall.innerHTML = respriceall;
	
//header获取商品信息的设置*******	//header获取商品信息的设置*******	//header获取商品信息的设置*******	
//获取商品信息也就是获取shoppingcar的cooike信息来显示
	var tbo1 = document.getElementById('head_lead12')
	var headshopnum1 = document.getElementById('headshopnum1')
	var headshopnum2 = document.getElementById('headshopnum2')
	var headshopprice = document.getElementById('headshopprice')
	//每次点击事件先清空tbo中的内容		
		tbo1.innerHTML = "";
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
						tbo1.removeChild(this.parentNode.parentNode);
					}
					tbo1.appendChild(alldiv);
				}
				headshopnum1.innerHTML = shopnumcount;
				headshopnum2.innerHTML = shopnumcount;
				headshopprice.innerHTML = shoppriceall;
			}else{
				tbo1.innerHTML = '您还没有添加商品到购物车！赶快去挑选商品把。';
			}

}	