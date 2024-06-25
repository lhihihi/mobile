// TOP Right -개강일정안내...슬라이드UP 함수
function slideupTop(){
	$(".top_right ul").stop(true,true).animate({"margin-top":"-=20px"},1000,function(){ 		
		$(".top_right ul li:first-child").appendTo(".top_right ul"); 	
		$(this).css({"margin-top":"0"}); 
	});
}

// Review-수강후기 ...슬라이드UP 함수
function slideupBottom(){
	$(".slide").stop(true,true).animate({"margin-top":"-=150px"},1000,function(){ 		
		$(".slide li:first-child").appendTo(".slide"); 	
		$(this).css({"margin-top":"0"}); 
	});
}


$(document).ready(function(){
	
	setInterval(slideupTop,5000);  //함수 자동화
	setInterval(slideupBottom,5000);  //함수 자동화


	//TOP Mobile Menu.............................

	/*--->>>메뉴버튼(햄버거메뉴)*/
	$(".gnb_list").css({"left":"-60%"});  /*처음위치*/

	
	/*메뉴버튼*/
	$(".gnb_btn").click(function(){  
		$(".gnb_list").stop(true,true).animate({"left":0});
		$(".back").stop(true,true).fadeIn(); //메뉴 뒤 검정배경 등장
	});


	/*닫기버튼*/	
	$(".gnb .close").click(function(){  
		$(".gnb_list").stop(true,true).animate({"left":"-60%"});
		$(".back").stop(true,true).fadeOut(); //메뉴 뒤 검정배경 사라짐
	});

	// 헤더 안 슬라이드

	let fadeContainer = $(".fade"),
	fadeImage = fadeContainer.find(".fade-items ul li"),
	fadeIndicator = fadeContainer.find(".fade-indicator a"),
	fadePrev = fadeContainer.find(".fade-side .prev"),
	fadeNext = fadeContainer.find(".fade-side .next"),
	oldidx = 0, 
	idx=0, 
	fadeCount = fadeImage.length, 
	interval = 2000;

function fadeAni(idx){  
  if(oldidx != idx){  
	fadeIndicator.eq(oldidx).removeClass("active"); 
	fadeIndicator.eq(idx).addClass("active"); 
	fadeImage.eq(oldidx).stop().fadeOut("300"); 
	fadeImage.eq(idx).stop().fadeIn("300");  
  }
  oldidx = idx; 
};

function fadeAuto(){
  fadeTimer = setInterval(function(){
	//현재가 (0+1)%5=1, (1+1)%5=2, (2+1)%5=3, (3+1)%5=4, (4+1)%5=0 
	idx = (oldidx + 1) % fadeCount;
	fadeAni(idx);
  },interval);
};

fadeAuto();

	//Footer-TOP버튼 클릭하면 맨 위로....................

	$(".footMenu ul li:last-child").click(function(){
		$("body,html").animate({scrollTop:"0"},700);
		return false;
	});

	//animate부분(close/open)
  bb=true;

  $(".trigger_btn").click(function(){

    $(this).toggleClass("active");
    if(bb){  /* 상하간격을 고려하여 위치를 잡아준다. */
      $(".quick_icon .icon5").stop().animate({"bottom":"60px"},500,"easeOutBack");
      $(".quick_icon .icon4").stop().animate({"bottom":"120px"},500,"easeOutBack");
			$(".quick_icon .icon3").stop().animate({"bottom":"180px"},500,"easeOutBack");
			$(".quick_icon .icon2").stop().animate({"bottom":"240px"},500,"easeOutBack");
			$(".quick_icon .icon1").stop().animate({"bottom":"300px"},500,"easeOutBack");
      bb=false;
    }else{
      $(".quick_icon li").stop(true,true).animate({"bottom":"0px"},200);
      bb=true;
    }
  });

	//SUB-포트폴리오...................................................

	$(".po_list .btn1").click(function(){
		$(this).hide();		
		$(".po_list>ul>li:nth-child(n+7):nth-child(-n+12)").fadeIn();
	});

	$(".po_list .btn2").click(function(){
		$(this).hide();		
		$(".po_list>ul>li:nth-child(n+13):nth-child(-n+18)").fadeIn();
	});

	$(".po_list .btn3").click(function(){
		$(this).hide();		
		$(".po_list>ul>li:nth-child(n+19):nth-child(-n+23)").fadeIn();
	});


});