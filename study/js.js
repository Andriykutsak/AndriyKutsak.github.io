$(function(){
	let btn="<div class=\"btn\"><a href=\"\">hrllo world</a></div>"
	$('.block').on("click",function(){
		$(this).add("p").css("background-color","red");
		console.log("hello")
	});
})