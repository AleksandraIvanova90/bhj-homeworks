const p = document.getElementById('timer');
	setInterval( () => {
		second = p.textContent.substring(p.textContent.length - 2)
		if (second > 0) {	
		p.textContent = `00:00:${Number(second) - 1}`	
		} else {
			alert("Вы победили в конкурсе!")
			}
}, 1000)
