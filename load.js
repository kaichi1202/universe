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
}