
const modal = document.getElementById('subscribe-modal');

if(getCookie('modal') === null) {
    modal.classList.add('modal_active');
}
modal.querySelector('.modal__close').addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modal', 'has been shown');
});

function getCookie(name) {
    let pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
}

function setCookie (name, value) {
    document.cookie = name + '=' + encodeURIComponent(value) + '; Secure; SameSite=None';
}