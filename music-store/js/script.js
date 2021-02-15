$(document).ready( function(){
	if($(window).width()<875){
	$("#menu").hide();
}
  $("#btn").click(function(){
    $("#menu").toggle(400,'linear');
  });
});