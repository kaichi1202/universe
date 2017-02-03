var isDown = false;
$(function(){
	$("#menubtn").click(function(){
		if (isDown == true) {
				$("#menubtn").html('<i class="fa fa-bars"></i>▽');
				isDown = false;
		} else {
				$("#menubtn").html('<i class="fa fa-bars"></i>△');
				isDown = true;
		}
		$("#menu").slideToggle();
	});
});

$(window).ready(function(){
	$(".left")
		.mouseover(function(){
			$(".icon").attr("src", "images/icong.png");
		})
		.mouseout(function(){
			$(".icon").attr("src", "images/iconw.png");
		});
});