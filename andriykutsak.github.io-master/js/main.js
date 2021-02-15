
$(document).ready(function(){
	//responsive menu
	if($(window).width()<800){
		console.log("i")
	 $(".menu-wraper").hide();
	 $(".responsive-btn").click(function(){
	 	$(".menu-wraper").toggle("slow")
	 });
	}
	// box resizing
	$(".prof-wraper").width($(".prof-wraper>.img-wraper>img").width());
	$(".prof-wraper").height($(".prof-wraper>.img-wraper>img").height())
	// slider
	let count=0;
	function nextSlide(){		
		if(count>=$(".slide").length-1){
			count=0;			
		}
		else{
			count++;
			
		}console.log(count)
		
		$(".slide-wrap").css("transition","0.4s")
		$(".slide-wrap").css("transform","translateX(-"+count*$(".slide").width()+"px)")
}
	nextSlide();
	setInterval(function(){
		
		nextSlide();
	},3000)

});