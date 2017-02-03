var isFirst = true;

function changeIe(){
    if (isFirst == false){
        $(".ie, .me, .sa, .gc").css("transition", "1s");//  1秒かけて変わるようにする
                                                        //  ページ幅変更時に影響を受けないように設定
    }
    $(".me, .sa, .gc").css("opacity", "0");             //  他の要素を隠す
    $(".meb, .sab, .gcb").css("opacity", "0.5");        //  他のボタンを薄くする
    $(".ieb").css("opacity", "1");                      //  ボタンを透明でないようにする
    $(".ie").css("opacity", "1");                       //  この要素を出現させる
    $(".ie").attr("class", "ie active");                //  アクティブにする
}

function changeMe(){
    $(".ie, .me, .sa, .gc").css("transition", "1s");
    $(".ie, .sa, .gc").css("opacity", "0");
    $(".ieb, .sab, .gcb").css("opacity", "0.5");
    $(".meb").css("opacity", "1");
    $(".me").css("opacity", "1");
    $(".me").attr("class", "me active");
}

function changeSa(){
    $(".ie, .me, .sa, .gc").css("transition", "1s");
    $(".ie, .me, .gc").css("opacity", "0");
    $(".ieb, .meb, .gcb").css("opacity", "0.5");
    $(".sab").css("opacity", "1");
    $(".sa").css("opacity", "1");
    $(".sa").attr("class", "sa active");
}

function changeGc(){
    $(".ie, .me, .sa, .gc").css("transition", "1s");
    $(".ie, .me, .sa").css("opacity", "0");
    $(".ieb, .meb, .sab").css("opacity", "0.5");
    $(".gcb").css("opacity", "1");
    $(".gc").css("opacity", "1");
    $(".gc").attr("class", "gc active");
}

function ieClick(){
    changeIe();
}

function meClick(){
    changeMe();
}

function saClick(){
    changeSa();
}

function gcClick(){
    changeGc();
}

window.onload = function(){
	setInfoPosition();
}

$(window).resize(function(){
	setInfoPosition();
});

function setInfoPosition(){
    $(".ie, .me, .sa, .gc").css("transition", "0s");
    var oneImgWidth = $(".active").width();
	$(".ie, .me, .sa, .gc").css("height", oneImgWidth * (620 / 1754));
	$(".systems").css("height", oneImgWidth * (620 / 1754));
	if (isFirst == true){
	    changeIe();
	    isFirst = false;
	}
}