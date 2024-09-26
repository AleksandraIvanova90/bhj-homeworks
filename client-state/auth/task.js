const signin = document.getElementById('signin');
const form = document.querySelector('form');
const welcome = document.getElementById('welcome');
const span =  document.getElementById('user_id');

if (localStorage.user_id !== undefined) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    span.textContent = localStorage.user_id;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.readyState == xhr.DONE) {
            const data = xhr.response;
            if (data.success == false) {
                alert('Неверный логин/пароль');
                form.reset()
            } else {
                localStorage.setItem('user_id', data.user_id);
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                span.textContent = data.user_id;
            }
        }        
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
})

