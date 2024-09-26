let textarea = document.querySelector('textarea')
const button = document.querySelector('button')
textarea.textContent = localStorage.getItem('text')

textarea.addEventListener('input', () => {
    localStorage.setItem('text', textarea.value)
})

button.addEventListener('click', ()=>{
    textarea.textContent = ''
    localStorage.removeItem('text')
})
