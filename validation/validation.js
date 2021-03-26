(function(){
	let el=document.querySelector("form");
	const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const user_name=/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
	const pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	const message=[
	"заповніть поле",
	"перевірте ваш пароль",
	"паролі не збігаються",
	"перевірте ваш  Email"
	];
	el.addEventListener('submit',function(e){
		e.preventDefault();
		console.log(e.submitter);
		e.srcElement.forEach(function(el){
			console.log(el.value)
		})
	})
})();