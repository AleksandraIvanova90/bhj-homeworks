const products = Array.from(document.querySelectorAll('.product'))
const cart = document.querySelector('.cart__products')
let buttonsAddProduct = Array.from(document.querySelectorAll('.product__add'))


products.forEach((product) => {
    let productControls = Array.from(product.querySelectorAll('.product__quantity-control'))
    let productValue = product.querySelector('.product__quantity-value')
   
    productControls.forEach((productControl) => {
        if (productControl.textContent.trim() == '-'){
            productControl.addEventListener('click', () => {
                if (productValue.textContent > 1) {
                    productValue.textContent--
                }
            })
        } else if(productControl.textContent.trim() == '+'){
            productControl.addEventListener('click', () => {
                productValue.textContent++
            })
        }
})
})
buttonsAddProduct.forEach((button) => {
    button.addEventListener('click', (ev) => {
        let inCart = Array.from(cart.querySelectorAll('.cart__product'))
        let parent = (ev.target).closest('.product')
        let id = parent.getAttribute('data-id')
        let img = parent.querySelector('img').src
        let count = parent.querySelector('.product__quantity-value').textContent
        
        const productInCard = inCart.find((elem) => elem.getAttribute('data-id') === id);
        if(productInCard) {
            let count3 = +(productInCard.lastElementChild.textContent)     
            productInCard.lastElementChild.textContent = count3 +  Number(count)
        } else {
       cart.insertAdjacentHTML('afterbegin', `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${count}</div>
             </div>`)
        } 
    })
})
