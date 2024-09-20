let loader = document.querySelector('img')
let items = document.getElementById('items')

let xhr =  new XMLHttpRequest()

xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let a = JSON.parse(xhr.response)
        let k = a.response.Valute
       
       Object.values(k).forEach((val) =>{
        items.insertAdjacentHTML('beforeend', `
            <div class="item">
                <div class="item__code">
                    ${val.CharCode}
                </div>
                <div class="item__value">
                    ${val.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`)
   })
        loader.classList.remove('loader_active')
    }
})