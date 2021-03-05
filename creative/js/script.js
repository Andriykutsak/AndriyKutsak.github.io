(function(){
	let sq=document.querySelectorAll(".rot-block");
	window.addEventListener('load',function(e){
			function setHeight(){
		sq.forEach(function (el) {
			el.style.height=el.clientWidth+"px";
			console.log(el.clientWidth)
		})
	}
	setHeight()
	})

})();