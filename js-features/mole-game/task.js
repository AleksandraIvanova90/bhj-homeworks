let dead = document.getElementById("dead")
let lost = document.getElementById("lost")
for (let i = 1; 1 < 9; i++) {
	let hole = document.getElementById(`hole${i}`)
	hole.onclick = () => {
		if (hole.className.includes( 'hole_has-mole' )) {
			dead.textContent = +dead.textContent + 1
			if (dead.textContent == 10) {
				dead.textContent = 0
				lost.textContent = 0
				alert("Победа!")
			}
		} else {
			lost.textContent = +lost.textContent + 1
			if (lost.textContent == 5) {
				dead.textContent = 0
				lost.textContent = 0
				alert("Вы проиграли!")
			}
		}
	}
}