(function(){
let head=document.querySelector(".logo>a");
let headDesc=document.querySelector(".logo-desc");
let gHead=document.querySelectorAll("h2")
let p=document.querySelectorAll("p")
let minSizes={
	head:30,
	headDesc:16,
	GradientHead:16,
	blockHead:30,
}

function resize(a,b){
	let css=getComputedStyle(a)
	let size=(b+(parseInt(css.fontSize)-b)*(window.innerWidth/1520));
	if (size<parseInt(css.fontSize)) {
		 a.style.fontSize=size+"px";
	}
	
	 console.log(parseInt(window.innerWidth))
	 console.log((b+(parseInt(css.fontSize)-b)*(window.innerWidth/1520)))
}

	resize(head,minSizes.head)
	resize(headDesc,minSizes.headDesc)
	gHead.forEach(function(k){
		resize(k,minSizes.GradientHead)
	})
	p.forEach(function(k){
		resize(k,16)
	})


})()