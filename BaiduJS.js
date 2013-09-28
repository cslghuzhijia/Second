
$(function(){
	slide();
	txtchange();
	Baiyechuang();
	shuxin();
	floatbar();
	SlideBar();
	Loginclick();
	SmallIcon();

});

function SmallIcon(){
	$(".men").hover(function(){
		$(this).append('<div class="hide1"></div>');
		$(".hide1").css("left",($(this).width())/2-($(".hide1").width())/2);
		$(".hide1").css("top",-$(".hide1").height());
	},function(){
		$(this).find(".hide1").remove();
	});

	$(".Eye").hover(function(){
		$(this).append('<div class="hide2"></div>');
		$(".hide2").css("left",($(this).width())/2-($(".hide2").width())/2);
		$(".hide2").css("top",-$(".hide2").height());
	},function(){
		$(this).find(".hide2").remove();
	});
}





var panbie=0;
function Loginclick(){
	$(".normal-login").mousedown(function(){
		
		$(this).css({"font-weight":"bold","border-bottom":"0px","background-color":"#fafafa"});
		$(".phone-login").css({"font-weight":"normal","border-bottom":"1px solid #d4d4d4","background-color":"#f4f4f4"});
		
	});
	$(".phone-login").mousedown(function(){
		
		$(this).css({"font-weight":"bold","border-bottom":"0px","background-color":"#fafafa"});
		$(".normal-login").css({"font-weight":"normal","border-bottom":"1px solid #d4d4d4","background-color":"#f4f4f4"});
		
	});
}
function Loginover(){
	$(".same").mouseover(function(){

		$(this).css("background-color","#fafafa");
	});
	$(".same").mouseout(function(){
		$(this).css("background-color","#f4f4f4");
	});


}




function SlideBar(){
	$(".tab").hover(function(){
		var le=$(this).position();
		$("#HuaDong").animate({left: "+"+le.left+"px"}, "slow");
	},function(){
		
		$("#HuaDong").animate({left: '+0px'}, "slow");
		
	});
	
}




function floatbar(){
	$("#recom").mouseover(function(){
		$(".leftShot").show();
		
		$(".rightShot").show();
	});
	$("#recom").mouseout(function(){
		$(".leftShot").hide();
		
		$(".rightShot").hide();
	});
}






function txtchange(){
	$("#txt").keyup(function(){
		shuxin();
	});
}
function shuxin(){
		var val=$("#txt").val();
		if (val=="") {$("#txt").css("background-image",'url("Imag/word.png")')}
		else{$("#txt").css("background-image","none")}
}

function Baiyechuang(){
       $("#leader dt").mouseover(function() {
		
		$(".hotspots-list dd").hide();
		$(this).next("dd").show();
	});

}



var i=1 ;
var handle;
//选择图片
function getPic(index)
{
	
	var pre=1;
	i = parseInt(index);
	for (var j = 4; j >=1; j--) {
		if (j!=i) {
			var every=document.getElementById("pic"+j);
			every.style.border="0px";
		}
		
	}
	
	var e=document.getElementById("console");
	var s=document.getElementById("ARCHeader");
	var d=document.getElementById("articleDescLink");
	var self=document.getElementById("pic"+index);
	if (i==1) {
		pre=4;
	}
	else{
		pre=i-1;
	}
	var prepic=document.getElementById("pic"+pre);
	self.style.border="2px solid #41a7cb";
	prepic.style.border="0px";
	if (i==1)
	 {
	 	e.style.backgroundImage="url(Imag/head1.png)";

	 	s.innerHTML="点点鼠标，收藏图片";
	 	d.innerHTML="双飞等你来玩";

	 }
	else if (i==2) {
		e.style.backgroundImage="url(Imag/head2.png)";
		s.innerHTML="黄义达的有话要说";
		d.innerHTML="想知道黄义达会说什么吗？赶快点击查看";
	}
	else if (i==3) {
		e.style.backgroundImage="url(Imag/head3.png)";
		s.innerHTML="百度相册多人相册，重磅出击";
		d.innerHTML="多人相册活动赶快来吧";
	}
	else{
		e.style.backgroundImage="url(Imag/head4.png)";
		s.innerHTML="百度照片管家";
		d.innerHTML="智能管理电脑中杂乱的照片";
	}
	
}


//进入图片
function enter(index){
	clearInterval(handle);
	getPic(index);
}
//自动变换图片
function slide()
{
	var hide=document.getElementById("hide");
	hide.style.zIndex=50;
	getPic(1);
 	handle=setInterval("AutoChange()",1000);

}

function AutoChange()
{
	if(i>4) 
	{
		i=1;
	}
	getPic(i);
	i++;
	
}
function leave(index){
	
	handle=setInterval("AutoChange()",1000);
}