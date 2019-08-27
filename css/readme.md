## Web开发者需要知道的CSS Tricks

	<p class="red" id="para">点击切换颜色</p>
	//切换类名（有则删、无则增，常用于一些切换操作，如显示/隐藏）
	document.querySelector('#para').onclick=function(){
		document.querySelector('#para').classList.toggle('red')
	}
	
	//getBoundingClientRect---可以获取指定元素在当前页面的空间信息：
	document.querySelector('#para').getBoundingClientRect()
	
	//监听当前的网络状态变动，然后执行对应的方法：
	window.addEventListener("offline", () => {
	  alert("连接成功！");
	});
	window.addEventListener("offline", () => {
	  alert("你断网啦！");
	});
	
	
	/**
	 * @method launchFullScreen 开启全屏
	 * @param {Object} elem = document.documentElement 作用的元素
	 */
	const launchFullScreen = (elem = document.documentElement) => {
	  if(elem.requestFullScreen) {
	    elem.requestFullScreen();
	  } else if(elem.mozRequestFullScreen) {
	    elem.mozRequestFullScreen();
	  } else if(elem.webkitRequestFullScreen) {
	    elem.webkitRequestFullScreen();
	  }
	}
	
	
	/**
	 * @method exitFullScreen 关闭全屏
	 */
	const exitFullScreen = () => {
	  if (document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if (document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	  } else if (document.webkitCancelFullScreen) {
	    document.webkitCancelFullScreen();
	  }
	}


