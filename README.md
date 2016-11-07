
CFigure BY JORDAN 2016.07.29.
-----------------------------

> Author Home:xusenlin.com.---

CFigure是一个方便，简单，定制性好，轻量级，代码体积5k，压缩后3k。只需3步即可在页面上添加不止一个漂亮的可互交的轮播图插件。不依赖于任何js库。

需要的html:

    <div id="cf"></div>
    <div id="hh"></div>

这里可以添加一到多个容器，从而产生多幅轮播图。


----------
css:

    <style>
		*{
			padding: 0;
			margin: 0;
		}

		.cfigure{
			position: relative;
			overflow: hidden;
			margin: 0;
			padding: 0;
		}
		.cfigure-photo{
			margin: 0;
			padding: 0;
			position: absolute;
			left: 0;
			list-style-type: none;
			transition: all 0.4s;
		}
		.cfigure-photo-li{
			margin: 0;
			padding: 0;
			float: left;
		}
		.cfigure-photo-a{
			margin: 0;
			padding: 0;
			font-size: 0;
		}
		.cfigure-img{
			margin: 0;
			padding: 0;
			width: 100%;
			height: auto;
		}
		.cfigure-point{
			position: absolute;
			transition: all 0.4s;
			list-style-type: none;
			left: 36px;
			bottom: 26px;
			height: 11px;

		}
		.cfigure-point-li{
			cursor: pointer;
			float: left;
			width: 11px;
			height: 11px;
			margin-right: 10px;
			border-radius: 50%;
			background: #9f9fa0;
			border: 2px solid #9f9fa0;
		}
		.cfigure-point .active,.cfigure-point-li:hover {
			background: #dc1716;
			border: 2px solid #bcbbbb;
		}
	</style>

这一步是必须的。使你的轮播图更美观。


----------

js:

    <script>
    	CFigure.config({
    		"id":"cf",
    		"with":1170,
    		"height":510,
    		"img":{
    			"1图片描述":["img/1.jpg","http://localhost/wordpress/"],
    			"2图片描述":["img/2.jpg","http://localhost/wordpress/"],
    			"3图片描述":["img/3.jpg","http://localhost/wordpress/"],
    			"4图片描述":["img/4.jpg","http://localhost/wordpress/"]
    		}
    	});
    
    	CFigure.config({
    		"id":"hh",
    		"with":700,
    		"height":260,
    		"time":1000,
    		"img":{
    			"1图片描述":["img/3.jpg","http://localhost/wordpress/"],
    			"2图片描述":["img/2.jpg","http://localhost/wordpress/"],
    			"3图片描述":["img/1.jpg","http://localhost/wordpress/"],
    			"4图片描述":["img/4.jpg","http://localhost/wordpress/"]
    		}
    	});
    
    </script>

这里是轮播图配置，相信你能看得懂，祝使用愉快！
如果喜欢，别忘了给一个Star-_-