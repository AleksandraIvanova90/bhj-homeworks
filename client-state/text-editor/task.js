let textarea = document.querySelector('textarea')
const button = document.querySelector('button')
let text = 0

const storedText = localStorage.getItem('text')
textarea.textContent = storedText

textarea.addEventListener('input', () => {
    text = textarea.value
    localStorage.setItem('text', text)
})

button.addEventListener('click', ()=>{
    textarea.textContent = ''
    localStorage.removeItem('text')
})
