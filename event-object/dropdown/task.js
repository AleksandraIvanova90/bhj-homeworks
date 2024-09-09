// const dropdownList = document.querySelector('ul')
function onClickList(e) {
    const targetElem = e.target
    const valueElement = targetElem.closest('.dropdown__value')
    console.log(valueElement)
    if (valueElement === null) {
        e.stopPropagation()
        return
    }
    console.log(targetElem.nextElementSibling.classList.toggle('dropdown__list_active'))
}

function onClickItem(e) {
    e.preventDefault()
    k = e.target
    k.closest('div').querySelector('.dropdown__value').textContent = e.srcElement.textContent.trim()
    k.closest('div').querySelector('ul').classList.remove('dropdown__list_active')
}

    const p = Array.from(document.querySelectorAll('.dropdown'))
    p.forEach((im) => {
        im.addEventListener('click', onClickList)
    })

    const dropdownItems = Array.from(document.querySelectorAll('li'))
    dropdownItems.forEach((item) => {
        item.addEventListener('click', onClickItem)
    })

    