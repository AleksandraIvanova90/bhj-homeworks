function onScroll() {
    reveals.forEach ((reveal) => {
        let revealTop = reveal.getBoundingClientRect().top
        let revealBottom = reveal.getBoundingClientRect().bottom
        if (revealTop > 0 && revealBottom < window.innerHeight) {
            reveal.classList.add('reveal_active')
            console.log(revealTop)
        }
    })
}



const reveals = Array.from(document.querySelectorAll('.reveal'))
document.addEventListener('scroll', onScroll) 