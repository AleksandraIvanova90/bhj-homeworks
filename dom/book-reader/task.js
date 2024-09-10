function onClickFont(event) {
    event.preventDefault()
    let eventClick = event.target
    let parent = eventClick.parentElement
    let childrenList = Array.from(parent.children)
    childrenList.forEach ((i) => {
        if (eventClick == i) {
            i.classList.add('font-size_active')
            if (eventClick.classList.contains('font-size_small')) {
                let bookContent = document.querySelector('.book')
                bookContent.classList.remove('book_fs-big')
                bookContent.classList.add('book_fs-small')
              
            } else if (eventClick.classList.contains('font-size_big')) {
                let bookContent = document.querySelector('.book')
                bookContent.classList.remove('book_fs-small')
                bookContent.classList.add('book_fs-big')

            } else {
                let bookContent = document.querySelector('.book')
                if (bookContent.classList.contains('book_fs-small')) {
                    bookContent.classList.remove('book_fs-small')
                }
                if (bookContent.classList.contains('book_fs-big')) {
                    bookContent.classList.remove('book_fs-big')
                }
            }        
        } else {
        i.classList.remove('font-size_active')
        }
        })
} ;

function onClickColorText(event) {
    event.preventDefault()
    let eventClick = event.target
    let parent = eventClick.parentElement
    let childrenList = Array.from(parent.children)
    childrenList.forEach ((i) => {
        if (eventClick == i) {
            i.classList.add('color_active')
            if (eventClick.classList.contains('text_color_black')) {
                let bookContent = document.querySelector('.book')
                bookContent.classList.remove('book_color-gray')
                bookContent.classList.remove('book_color-whitesmoke')
                bookContent.classList.add('book_color-black')
            } else if (eventClick.classList.contains('text_color_gray')) {
                let bookContent = document.querySelector('.book')
                bookContent.classList.remove('book_color-whitesmoke')
                bookContent.classList.remove('book_color-black')
                bookContent.classList.add('book_color-gray')
            } else {
                let bookContent = document.querySelector('.book')
                if (bookContent.classList.contains('book_color-gray')){
                    bookContent.classList.remove('book_color-gray')
                    bookContent.classList.add('book_color-whitesmoke')
                } else if (bookContent.classList.contains('book_color-black')) {
                    bookContent.classList.remove('book_color-black')
                    bookContent.classList.add('book_color-whitesmoke')
                } else [
                    bookContent.classList.add('book_color-whitesmoke')
                ]
            } 
        } else {
        i.classList.remove('color_active')
        }
        })
} ;

function onClickColorBackground(event) {
    event.preventDefault()
    let eventClick = event.target
    let parent = eventClick.parentElement
    let childrenList = Array.from(parent.children)
    childrenList.forEach ((i) => {
        if (eventClick == i) {
            i.classList.add('color_active')
            if (eventClick.classList.contains('bg_color_black')) {
                let bookContent = document.querySelector('.book')
                bookContent.classList.remove('book_bg-gray')
                bookContent.classList.remove('book_bg-white')
                bookContent.classList.add('book_bg-black')
            } else if (eventClick.classList.contains('bg_color_gray')) {
                let bookContent = document.querySelector('.book')
                bookContent.classList.remove('book_bg-white')
                bookContent.classList.remove('book_bg-black')
                bookContent.classList.add('book_bg-gray')
            } else {
                let bookContent = document.querySelector('.book')
                if (bookContent.classList.contains('book_bg-gray')){
                    bookContent.classList.add('book_bg-white')
                } else if (bookContent.classList.contains('book_bg-black')) {
                    bookContent.classList.remove('book_bg-black')
                    bookContent.classList.add('book_bg-white')
                } else {
                    bookContent.classList.add('book_bg-white')
                }
            } 
        } else {
        i.classList.remove('color_active')
        }
        })

}


const fontSizeArr = Array.from(document.querySelectorAll('.font-size'))
const bookControlColor = Array.from(document.querySelector('.book__control_color').children).slice(1)
const bookControlBackground = Array.from(document.querySelector('.book__control_background').children).slice(1)

fontSizeArr.forEach ((font) => {
    font.addEventListener('click', onClickFont)
})

bookControlColor.forEach ((colorText) => {
    colorText.addEventListener('click', onClickColorText)
})

bookControlBackground.forEach ((colorBackground) => {
    colorBackground.addEventListener('click', onClickColorBackground)
})

