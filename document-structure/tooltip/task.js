
const hrefs = Array.from(document.getElementsByClassName('has-tooltip'))
hrefs.forEach((href) => {
    href.insertAdjacentHTML("afterend", `<div class="tooltip">${href.title}</div>`)
    href.addEventListener('click', (ev)=> {
        ev.preventDefault()
        const e = (ev.target).nextElementSibling
        const x = href.getBoundingClientRect().x
        const y = href.getBoundingClientRect().y +20
        e.classList.toggle('tooltip_active')
        e.style.left = x + "px"
        e.style.top = y + "px"

    })
})