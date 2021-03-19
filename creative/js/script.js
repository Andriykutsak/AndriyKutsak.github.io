(function(){
	let sq=document.querySelectorAll(".rot-block");
	window.addEventListener('resize',function(e){
			function setHeight(){
		sq.forEach(function (el) {
			el.style.height=el.clientWidth+"px";
			
		})
	}
	setHeight()
	})

// animate element
let animItems=document.querySelectorAll(".animate__animated");
if(animItems.length>0){
	window.addEventListener('scroll',scrollAnimate);
	function scrollAnimate(){
		for (var i=0; i<animItems.length; i++) {
			const animItem=animItems[i];
			const animItemHeight=animItem.offsetHeight;
			const animItemOffset=offset(animItem).top;
			const animData=animItem.dataset.animation;
			console.log(animData);
			const animStart=2;
			let animItemPoint=window.innerHeight-animItemHeight/animStart;
			if (animItemHeight>window.innerHeight) {
				animItemPoint=window.innerHeight-animItemHeight/animStart;
			}
			if ((pageYOffset>animItemOffset-animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)) {
				animItem.classList.add(animData)
			}else{
				animItem.classList.remove(animData)
			}
		}
	};

function offset(el){
	const rect=el.getBoundingClientRect();
	scrollTop=window.pageYOffset ||document.documentElement.scrollTop;
	return{top: rect.top+scrollTop}
}
setTimeout(function(){scrollAnimate()},400)
}
else{
	
	console.log("nothing to animate");
}

})();