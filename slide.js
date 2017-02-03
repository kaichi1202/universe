document.onkeydown = function(e){
	//	キーコード取得
	var keyCode = e.keyCode;

	//	もし37(左キー)だったら前へスライド
	if(keyCode == 37){
		slideCurrent--;
		sliding();
	}

	//	もし39(右キー)だったら次へスライド
	if(keyCode == 39){
		slideCurrent++;
		sliding();
	}
}

//	幅を指定
var width = $(window).width();				//	画面の横幅
var slideCurrent = 0;						//	現在のスライド
var slideNum = $(".slide").length;			//	.slideの数
var slideSetWidth = width * slideNum;		//	幅 * 数
$(".slideSet").css("width", slideSetWidth);	//	cssにセット

//	 スライド
var sliding = function(){
	if(slideCurrent == -1){
		slideCurrent = 4;
	}
	if(slideCurrent == 5){
		slideCurrent = 0
	}
	$(".slideSet").stop().animate({
		left: slideCurrent * -width
	});
	switch (slideCurrent) {
		case 0:
			$("#one").text("●");
			$("#two").text("○");
			$("#three").text("○");
			$("#four").text("○");
			$("#five").text("○");
			$("#text").text("宇宙の謎");
			break;
		case 1:
			$("#one").text("○");
			$("#two").text("●");
			$("#three").text("○");
			$("#four").text("○");
			$("#five").text("○");
			$("#text").text("地球");
			break;
		case 2:
			$("#one").text("○");
			$("#two").text("○");
			$("#three").text("●");
			$("#four").text("○");
			$("#five").text("○");
			$("#text").text("太陽系");
			break;
		case 3:
			$("#one").text("○");
			$("#two").text("○");
			$("#three").text("○");
			$("#four").text("●");
			$("#five").text("○");
			$("#text").text("銀河");
			break;
		case 4:
			$("#one").text("○");
			$("#two").text("○");
			$("#three").text("○");
			$("#four").text("○");
			$("#five").text("●");
			$("#text").text("ブラックホール");
			break;
	}
}

//	前へ
function leftImageClick(){
	slideCurrent--;
	sliding();
}

//	次へ
function rightImageClick(){	
	slideCurrent++;
	sliding();
}

function oneClick(){
	slideCurrent = 0;
	sliding();
}

function twoClick(){
	slideCurrent = 1;
	sliding();
}

function threeClick(){
	slideCurrent = 2;
	sliding();
}

function fourClick(){
	slideCurrent = 3;
	sliding();
}

function fiveClick(){
	slideCurrent = 4;
	sliding();
}

//	オートスライド
function auto(){
	setTimeout("autoSlide()", 8000);
}

function autoSlide(){
	slideCurrent++;
	sliding();
	setTimeout("autoSlide()", 8000);
}

function load(){
	setPosition();
	width = $(window).width();
}

$(window).resize(function(){
	setPosition();
	width = $(window).width();
	sliding();
	change();
});

function setPosition(){
	var w = $(window).width();	//	画面サイズ取得
	var h = w * (550 / 1280);	//	縦横比を保持するためのheight
	var half = w / 2;			//	半分の値
	$("#one").css("left", half - 40);
	$("#two").css("left", half - 20);
	$("#three").css("left", half);
	$("#four").css("left", half + 20);
	$("#five").css("left", half + 40);
	$("#gray").css("width", w);
	$("#right").css("top", h / 2);
	$("#left").css("top", h / 2);
	$(".slider").css("width", w);
	$(".slider").css("height", h);
	$(".slideImg").css("width", w);
	$(".slideImg").css("height", h);
	var slideNum = $(".slide").length;			//	.slideの数
	var slideSetWidth = w * slideNum;			//	幅 * 数
	$(".slideSet").css("width", slideSetWidth);	//	cssにセット
	$(".share li").css("height", $(".gaiyou a").height() / 3);
}

//	スマホ対応
function change(){
	if (width < 768){
		var w = $(window).width();
		var h = w * (550 / 1280);
		document.getElementById("right").src = "images/marrow-r-w.png";
		document.getElementById("left").src = "images/marrow-l-w.png";
		$("#right").css("max-height", h);
		$("#left").css("max-height", h);
		$("#right").css("width", "auto");
		$("#left").css("width", "auto");
		$("#right").css("top", "0px");
		$("#left").css("top", "0px");
		$("#right").css("transform", "");
		$("#gray").css("height", "25px");
	}else{
		var w = $(window).width();
		var h = w * (550 / 1280);
		document.getElementById("right").src = "images/arrow.png";
		document.getElementById("left").src = "images/arrow.png";
		$("#right").css("max-height", "");
		$("#left").css("max-height", "");
		$("#right").css("width", "50px");
		$("#left").css("width", "50px");
		$("#right").css("transform", "rotate(180deg)");
		$("#gray").css("height", "50px");
	}
}

//	ローディング表示
window.onload = function(){
	$(function(){
		//	表示をフェードアウト
		// $("#loading").fadeOut(500);
		$("#loading").hide();
		//	メインページをフェードイン
		// setTimeout(function(){
		// 	$("#main").fadeIn();
		// }, 500);
		$("#main").fadeIn();
	});
	auto();
	load();
	change();
}
