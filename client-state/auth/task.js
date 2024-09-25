const signin = document.getElementById('signin')
const welcome = document.getElementById('welcome')
const span =  document.getElementById('user_id')

if (localStorage.user_id !== undefined) {
    signin.classList.remove('signin_active')
    welcome.classList.add('welcome_active')
    span.textContent = localStorage.user_id
}
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
            const data = JSON.parse(xhr.response);
            if (data.success == false) {
                alert('Неверный логин/пароль')
            }
            localStorage.setItem('user_id', data.user_id)
            signin.classList.remove('signin_active')
            welcome.classList.add('welcome_active')
            span.textContent = data.user_id
        }

    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formData = new FormData(document.querySelector('form'))
    xhr.send(formData)
})

