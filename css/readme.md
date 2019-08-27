## Web开发者需要知道的CSS Tricks

	<p class="red" id="para">点击切换颜色</p>
	document.querySelector('#para').onclick=function(){
		document.querySelector('#para').classList.toggle('red')
	}
	//getBoundingClientRect---可以获取指定元素在当前页面的空间信息：
	document.querySelector('#para').getBoundingClientRect()
