//menu button
let btn=document.querySelector(".responsive-btn");
let menu=document.querySelector(".menu-container");
btn.addEventListener("click", function(){
	btn.classList.toggle("active");
	menu.classList.toggle("show-menu")
})
//portfolio menu
let	serviceItem=document.querySelector(".service-content");
console.log(serviceItem.offsetHeight)
function serviceMenu(){
	let serviceWindow=document.querySelector("#menu-window");	
	let listItems=document.querySelectorAll(".service-list>li>a");
	let items=document.querySelectorAll(".service-content");
	let wr=document.querySelector("#wraper")
	let itemHeight=items[0].offsetHeight;
	serviceWindow.style.height=itemHeight+"px"
	items.forEach(function(k){
		k.style.height=itemHeight+"px"
	})
	listItems.forEach(function(el,k){	
		el.addEventListener('click',function(e){
			e.preventDefault();
			for(let i=0;i>listItems.length; i++){
				listItems[i].classList.remove("active");
			}
			el.classList.add("active");
			wr.style.transform="translateY(-"+itemHeight*(k)+"px)";
			console.log((k+1)*itemHeight)
		})
	})
}
serviceMenu();
function dropDown(){
	let btn=document.querySelector("#dropdown-btn>a");
	let dropdownItems=document.querySelector("#dropdown-items");
	btn.addEventListener('click',function(e){
		e.preventDefault();
		btn.classList.toggle("active");
		dropdownItems.classList.toggle("active")
		if (btn.classList.contains("active")) {
			dropdownItems.style.display="block";
			
		}
		else if(false){
			dropdownItems.addEventListener("transitionend",function(){
				dropdownItems.style.display="none";
			})
			
		}

	})
}
dropDown();