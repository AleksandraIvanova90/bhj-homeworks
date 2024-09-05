const p = document.getElementById('timer');
let intervalId = setInterval( () => {
	let second = p.textContent.substring(p.textContent.length - 2)
	let second2 = p.textContent.substring(p.textContent.length - 1)
	if (second >= 10) {	
		p.textContent = `00:00:${Number(second) - 1}`	
	} else if(second2 < 10 && second2 > 0){
		p.textContent = `00:00:${Number(second2) - 1}`
	} else {
		alert("Вы победили в конкурсе!")
		clearInterval(intervalId)
	}	
}, 1000)
	
	



	
			
