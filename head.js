var isDown = false;
$("#menubtn").click(function(){
	if(isDown == true){
		$("#menubtn").text("▽");
		isDown = false;
	}else{
		$("#menubtn").text("△");
		isDown = true;
	}
});
