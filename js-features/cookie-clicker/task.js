let cookie = document.getElementById("cookie")
let counter = document.getElementById("clicker__counter")
let speed = document.getElementById("clicker__speed")
let  start = new Date();
cookie.onclick = () => {
	if (cookie.width !== 200) {
		cookie.width *= 2
	} else {
		cookie.width /= 2	
	}
	counter.textContent = +counter.textContent + 1
	end = new Date()
	speed.textContent = (1/((end.getTime() - start.getTime())/1000)).toFixed(2)
	start = end
}