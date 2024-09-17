const products = Array.from(document.querySelectorAll('.product'))
const cart = document.querySelector('.cart__products')
// let inCart = Array.from(cart.querySelectorAll('.cart__product'))
let buttonsAddProduct = Array.from(document.querySelectorAll('.product__add'))



products.forEach((product) => {
    let productControls = Array.from(product.querySelectorAll('.product__quantity-control'))
    let productValue = product.querySelector('.product__quantity-value')
    let buttonsAddProduct = product.querySelector('.product__add')
   
    

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
    // buttonsAddProduct.addEventListener('click', () => {
    //     let id = product.getAttribute('data-id')
    //     let image = product.querySelector('img')
    //     let productInCart = document.createElement('div')
    //     productInCart.className = 'cart__product'
    //     productInCart.dataset.id = id
    //     let imgProduct = document.createElement('img')
    //     imgProduct.className = 'cart__product-image'
    //     // imgProduct.src = image
    //     let countProduct = document.createElement('div')
    //     countProduct.className = 'cart__product-count'
    //     countProduct.textContent = productValue.textContent
    //     productInCart.appendChild(imgProduct)
    //     productInCart.appendChild(countProduct)
        
    //     // console.log(cart.children)
    //     console.log(inCart)
    //     if (cart.children.length > 0) {
            
    //         console.log(inCart)
    //         inCart.forEach((i) => {
    //             if (i.getAttribute('data-id') == productInCart.dataset.id) {
    //                 let count = +(i.lastElementChild.textContent)
                    
    //                 i.lastElementChild.textContent = count +  Number(countProduct.textContent)
    //             } else {
    //                 cart.appendChild(productInCart)

    //             }
    //         })
    //     } else {
    //         cart.appendChild(productInCart)
    //     }
    // } )
})
buttonsAddProduct.forEach((button) => {
    button.addEventListener('click', (ev) => {
        let inCart = Array.from(cart.querySelectorAll('.cart__product'))
        let parent = (ev.target).closest('.product')
        let id = parent.getAttribute('data-id')
        let img = parent.querySelector('img').src
        let count = parent.querySelector('.product__quantity-value').textContent
        let productInCart = document.createElement('div')
        productInCart.className = 'cart__product'
        productInCart.dataset.id = id
        let imgProduct = document.createElement('img')
        imgProduct.className = 'cart__product-image'
        imgProduct.src = img
        let countProduct = document.createElement('div')
        countProduct.className = 'cart__product-count'
        countProduct.textContent = count
        productInCart.appendChild(imgProduct)
        productInCart.appendChild(countProduct)
        if (cart.children.length > 0) {
            console.log(inCart)
            let ch = 0
            inCart.forEach((i) => {
                if (i.getAttribute('data-id') === productInCart.dataset.id) {
                    let count3 = +(i.lastElementChild.textContent)
                            
                    i.lastElementChild.textContent = count3 +  Number(countProduct.textContent)
                    
                } else {
                    ch++ 
                }
            })
            console.log(ch, inCart.length)
            if (ch == inCart.length) {
                cart.appendChild(productInCart)
            }
                    
        } else {
            cart.appendChild(productInCart)
            ch = 0
            }
        })

    })
