function infoLoad(){
  infoSetPosition();
}

$(window).resize(function(){
  infoSetPosition();
});

function infoSetPosition(){
  var infoW = $(window).width();
  if(infoW <= 767){
    $(".boxi-1").css("width", "50%");
    $(".boxi-2").css("width", "50%");
    $(".boxi-3").css("width", "50%");
    $(".boxi-4").css("width", "50%");
  }else{
    $(".boxi-1").css("width", "25%");
    $(".boxi-2").css("width", "25%");
    $(".boxi-3").css("width", "25%");
    $(".boxi-4").css("width", "25%");
  }
}
