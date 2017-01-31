//菜单hover特效
;$(function () {
	//顶部导航栏


$(".shortCut-nav2 li").hover(
	function () {
	     $(this).find('div').stop().slideDown(300);
	}
	,
	function () {
		$(this).find('div').stop().slideUp(300);
	})

//detial页面菜单栏
$(".quanbushangpinliebiao").hover(
		function () {
		 $('.navmenu').slideDown();
		}
		,
		function () {

			$(".navmenu").hover(
				function () {		
				},
				function () {
				$(this).slideUp();
				})
		    }
	)

// 	$("#d-goods-lbtn").click(function () {
// 		$(".d-goods-img ul").css('marginTop','0');
// 	})
// 	$("#d-goods-rbtn").click(function () {
// 		$(".d-goods-img ul").css('marginTop','-82px');
// })

	//主页菜单
	$('.navmenu li').each(function () {
		$(this).hover(
		function () {
	    $(this).find('.submenu-box').fadeIn(400); //you can give it a speed
	    }
	    ,
	    function () {
	    $(this).find('.submenu-box').fadeOut(400); //you can give it a speed
	    }
	)
	});

	//banner图
	$('.slider').glide({

		//autoplay:true,//是否自动播放 默认值 true如果不需要就设置此值

		animationTime:380, //动画过度效果，只有当浏览器支持CSS3的时候生效

		arrows:true, //是否显示左右导航器
		arrowsWrapperClass: "arrowsWrapper",//滑块箭头导航器外部DIV类名
		arrowMainClass: "slider-arrow",//滑块箭头公共类名
		arrowRightClass:"slider-arrow--right",//滑块右箭头类名
		arrowLeftClass:"slider-arrow--left",//滑块左箭头类名
		arrowRightText:">",//定义左右导航器文字或者符号也可以是类
		arrowLeftText:"<",

		nav:true, //主导航器也就是本例中显示的小方块
		navCenter:true, //主导航器位置是否居中
		navClass:"slider-nav",//主导航器外部div类名
		navItemClass:"slider-nav__item", //本例中小方块的样式
		navCurrentItemClass:"slider-nav__item--current" //被选中后的样式
	});
	
	//news  tab切换
	$(".tab-tit a").hover(
		function () {
		// alert($(this).index());
	    var i = $(this).index();//下标
	    $('.tab-con').eq(i).show().siblings().hide();
	})


	//商品详情页面导航
	$(".d-goods-img li").hover(
		function () {
			var index= $(this).index();
			$(".d-tupian li").eq(index).show().siblings().hide();
		})


//秒杀活动
function FreshTime()
	{
	    var endtime=new Date("1012/5/15");//结束时间
	    var nowtime = new Date();//当前时间
	    var lefttime= parseInt((nowtime.getTime()-endtime.getTime())/1000)  ; 
	    d=  parseInt(lefttime/(24*60*60)%60)  ;
	    h=  parseInt(lefttime/(60*60)%60)  ;
	    m= parseInt(lefttime/60%60)  ;
	    s=  parseInt(lefttime%60)  ;
	   
	    document.getElementById("LeftTime").innerHTML="剩于 "+d+"天"+h+"小时"+m+"分"+s+"秒";
	    if(lefttime<=0){
	    document.getElementById("LeftTime").innerHTML="团购已结束";
	    clearInterval(sh);
	    }


	}
	 FreshTime();
	  var sh;
	  sh= setInterval(FreshTime,1000)  ;

	  })
