window.onload= function(){
	//获取到节点
	var $span =document.body.getElementsByTagName("span");
	//对节点进行遍历
	// console.log($span)
	for(var i=0;i<$span.length;i++){
		//绑定事件
		$span[i].onclick=function(){
			//点击时清除其他元素属性
			for(var j=0;j<$span.length-1;j++){
				$span[j].setAttribute("class","");
			}
			this.setAttribute("class","activeSpan");
				//设置模特页面隐藏
			var $model=document.getElementById("ad").children;
			// console.log($model);
			var tempIndex =0;
			if(this.innerHTML=="模特"){
				tempIndex=0;
				}else if(this.innerHTML=="演绎"){
					tempIndex=1;	
				}else if(this.innerHTML=="专业"){
					tempIndex =2;
				}
				for(m=0;m<$model.length;m++){
					if(m==tempIndex){
						//增加属性
					$model[m].setAttribute("style","display:block");
					}else{
					$model[m].setAttribute("style","display:none");

					}
			    }
			//轮播效果，使用间歇动画获取节点
			var $modelG =document.getElementById("modelGroundAll");
			// console.log($modelG);
			setInterval(function(){
				var left =$modelG.style.left;
				var value =left.substring(0,left.length-2);
				$modelG.style.left=(value-750)+"px";
				// console.log(value);
				if(value<=-2250){
					$modelG.style.left="0px";
					
				}
				/*// console.log($modelG);
				//通过left设置按钮样式
				var $modelIndex=document.getElementById("modelIndex").chilren;
				var temp =0;
				if($modelG.style.left=="0px"){
					temp =0;
				}if($modelG.style.left=="-750px"){
					temp =1;
				}if($modelG.style.left=="-1500px"){
					temp =2;
				}if($modelG.style.left=="-2250px"){
					temp =3;
				}
				//遍历span，让对应的span有样式
				for(var a= 0;a<$modelIndex.length;a++){
					if(temp == a){
						modelIndex[a].setAttribute("class","active");
					}else{
						modelIndex[a].setAttribute("class","");

					}
				}*/
			},3000);
			
			//4.点击span设置样式，显示相对应的组
			//4-1获取到span节点
			
			/*for(var j=0;j<$modelIndex.length;j++){
				modelIndex[i].onclick=function(){
				//设置样式
				//通过按钮获取轮播
				var flag =this.getAttribute("flag");
				modelGroundAll.style.left =(flag*-750)+"px"
				}
			}*/
		/*	//鼠标进入时停止轮播，移开时继续
			modelGroundAll.onmouseover = function(){
				clearInterval(intervalId);
			}*/
		
		}

	}
	//设置“机构，招募”部分选项卡切换
	// 1.获取到节点nav中的span
	var $nav =document.getElementById("page").firstElementChild.getElementsByTagName("span");
	for(var s=0;s<$nav.length;s++){
		//绑定事件
		$nav[s].onclick=function(){
			//清除其他
			for(var n=0;n<$nav.length-1;n++){
				$nav[n].setAttribute("class","");
			}
			this.setAttribute("class","activeSpan");
				//2.获取页面
			var $page=document.getElementById("pg").children;
			console.log($page);
			var innum=0;
			//3.设置页面影藏
			if(this.innerHTML=="机构"){
				innum = 0;
				console.log(innum);
			}else if(this.innerHTML=="招募"){
				innum = 1;
				console.log(innum);
			}
			//4.添加页面display属性
			for(var x=0;x<$page.length;x++){
				if(x==innum){
				$page[x].setAttribute("style","display:block");
				console.log(this);
				}else{
				$page[x].setAttribute("style","display:none");
				console.log(-1);
				}
			}
		}	
	}

	//设置“娱乐，学堂”
	//1.获取span
	var $more=document.getElementById("more").firstElementChild.getElementsByTagName("span");
	//2.添加事件
	for(var b =0;b<$more.length;b++){
		$more[b].onclick=function(){
			//2-1-1清除属性
			for(var c=0;c<$more.length-1;c++){
				$more[c].setAttribute("class","");
			}
			//2-1添加属性
			this.setAttribute("class","activeSpan");
			//3.1获取页面节点
			var adjust =document.getElementById("adjust").children;
			//3.1.2获取顺序
			var index= 0;
			if(this.innerHTML=="学堂"){
				index =0;
			}else if(this.innerHTML=="娱乐"){
				index =  1;
			}
			//3-1-3通过页面顺序绑定获取页面进行属性增加
			for(var z=0;z<adjust.length;z++){
				if(z==index){
					adjust[z].setAttribute("style","display:block");
				}else{
					adjust[z].setAttribute("style","display:none");
				}
			}
		}
	}


}